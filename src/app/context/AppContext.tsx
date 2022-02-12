import React, { createContext, FC, useContext, useMemo } from "react";

import { Character } from "types/Character";

import character_data from "top_chars.json";

interface State {
  characters: Character[];
}

const initialState: State = {
  characters: []
};

export const AppContext = createContext(initialState);

interface CharData {
  Key: number;
  Value: Character;
}

const loadCharacterData = (): Character[] =>
  (character_data as CharData[]).map(({ Value }, index) => ({
    ...Value,
    index
  }));

const AppContextProvider: FC = ({ children }) => {
  const characters = useMemo(loadCharacterData, []);

  const contextState: State = {
    characters
  };

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
