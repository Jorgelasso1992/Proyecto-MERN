//import React, {Fragment, useStatement} from 'react';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main";

import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

const StyledApp = styled.div`
  .admin {
    margin-left: auto;
    margin-right: auto;
  }
`;
export function App() {
  return (
    <StyledApp>
      <Header />
      <Main />

      <Footer />
      <Routes>
        <Route path="/Main" element={<Main />} />
      </Routes>
    </StyledApp>
  );
}
