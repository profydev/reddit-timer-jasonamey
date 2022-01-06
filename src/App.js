import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Search from './pages/Search';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Normalize />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
