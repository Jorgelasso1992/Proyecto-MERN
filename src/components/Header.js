import React from "react";
import { Menu } from "./Menu"
import {ReactComponent as Logo} from "../assets/Logo.svg"

import { Avatar } from "./Avatar";
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color : #FF7878;
  align-items: center;
  position: relative;
  display : flex;
  width: 100%;
  height : 70px;
  .logo{
    position: absolute; 
    left: 10vh;
    
  }
`

 
export function Header() {
  
  return (
    
    <StyledHeader>
      <Logo className="logo"/>
      <Avatar className="avatar"/>
      <Menu/>
    </StyledHeader>
    
  ); 
}

