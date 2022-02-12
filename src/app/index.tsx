import React from "react";
import { ThemeProvider } from "styled-components";

import AppContextProvider from "app/context/AppContext";

import Ladder from "app/components/Ladder";

import { color } from "styles/theme";
import { OutsideWrapper, MiddleWrapper, InnerContent } from "./styles";

const App = () => (
  <ThemeProvider theme={{ color }}>
    <AppContextProvider>
      <OutsideWrapper>
        <MiddleWrapper>
          <InnerContent>
            <Ladder />
          </InnerContent>
        </MiddleWrapper>
      </OutsideWrapper>
    </AppContextProvider>
  </ThemeProvider>
);

export default App;
