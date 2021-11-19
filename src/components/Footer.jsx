import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;

  align-items: center;
  position: fixed;
  bottom: 0;
  background: #ff7878;
  .container {
    display: flex;
    margin: auto;
  }
  .logo{
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
        <Logo className="logo"/>
      </div>
    </StyledFooter>
  );
}
