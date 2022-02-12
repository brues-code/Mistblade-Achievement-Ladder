import React, {
  createContext,
  Dispatch,
  FC,
  useContext,
  useState,
  useEffect,
} from "react";
import { delay, fill, isEqual, last, noop, range } from "lodash";

interface State {}

const initialState: State = {};

export const AppContext = createContext(initialState);

const AppContextProvider: FC = ({ children }) => {
  const contextState: State = {};

  return (
    <AppContext.Provider value={contextState}>{children}</AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
