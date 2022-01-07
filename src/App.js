import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';

import theme from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Normalize />
          <GlobalStyle />
          <Routes>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/search">Search</Route>
            <Route>404 - Not Found</Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
