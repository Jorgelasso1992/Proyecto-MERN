import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 1vh 5vw;
  color: ${props => props.color || "black"};
  background-color: ${props => props.backgroundColor || "#916BBF"};
  border: none;
  border-radius: 109px;

  
`;
export function Button(props) {
  return <StyledButton type={props.type} backgroundColor={props.backgroundColor}
  color={props.color}>{props.value}</StyledButton>;
}
