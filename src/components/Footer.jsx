import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { Main } from "./Main";

const StyledFooter = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background: #ff7878;
  .container {
    display: flex;
    margin: auto;
  }
  .logo {
    position: relative;
    right: 25px;
    top: 10px;
    height: 30px;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <p>Copyright &copy; 2021 - </p>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <Routes>
          <Route path="/sho" element={<Main />} />
        </Routes>
      </div>
    </StyledFooter>
  );
}
