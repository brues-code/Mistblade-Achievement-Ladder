import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useState,
  useEffect,
} from "react";

import { Character } from "types/Character";

import sample_character_data from "testdata.json";

interface State {
  characters: Character[];
}

const initialState: State = {
  characters: [],
};

export const AppContext = createContext(initialState);

interface SampleData {
  Key: number;
  Value: Character;
}

const loadSampleData = (): Character[] =>
  (sample_character_data as SampleData[]).map(({ Value }, index) => ({
    ...Value,
    index,
  }));

const AppContextProvider: FC = ({ children }) => {
  const [characters] = useState<Character[]>(loadSampleData());

  const contextState: State = {
    characters: characters,
  };

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
