import React from "react";
import { Avatar } from "./Avatar";
import { Menu } from "./Menu"
import {ReactComponent as Logo} from "../assets/Logo.svg"

export function Header(props) {
  return (
    <header>
      <Logo/>
      <Avatar cassName="Avatar" user={props.user} />
      <Menu/>
    </header>
  );
}
