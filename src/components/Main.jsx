import React from "react";
import Button from "./Button";
import Image from "../assets/KinderArt.png";

export function Main() {
  return (
    <main>
      <img src={Image} alt="Arte realizada con niños"/>
      <Button type="button" value="Crea tu cuenta"/>
      <Button type="button" value="Inicia sesión"/>
    </main>
  );
}
