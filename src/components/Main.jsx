import React from "react";
import {Button} from "./Button";
import Image from "../assets/KinderArt.png";
import styled from 'styled-components'

const StyledMain = styled.main`
.slider{
  width: 80vw;
  height: 80vh;
}
`

export function Main() {
  return (
    <StyledMain>
      <img className="slider" src={Image} alt="Arte realizada con niños"/>
      <Button type="button" value="Crea tu cuenta"/>
      <Button type="button" value="Inicia sesión"/>
    </StyledMain>
  );
}
