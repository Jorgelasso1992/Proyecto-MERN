import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const StyledTable = styled.div`
  position: absolute;
  margin: 0 5vmax;
  border: solid 9px #bcff78;
  border-radius: 40px;

  height: 3000px;
  h1 {
    margin-left: 5vw;
    margin-right: 5vw;
    padding: 10px;
    text-align: center;
    background: #fff;
    color: #ff96ad;
    border-radius: 30px;
  }
  .fecha {
    margin-left: 5vw;
    padding-top: 3vh;
  }
  .input-fecha {
    text-decoration: none;
    height: 30px;
    border: solid 2px #ff96ad;
    border-radius: 6px;
  }
  .teacher-info {
    margin: 0 5vw 2vh;
    height: 200px;
    overflow: scroll;
    border-radius: 10px;
    padding: 20px;
  }
  .button-box {
    position: sticky;
    right: 0;
    top: 0;
    background: #916BBF;
    padding: 1.5vh;
  }
  button{
    margin-left: 10px;
    border:none;
  }
`;
export function Table() {
  return (
    <StyledTable>
      <div className="fecha">
        <label className="label-fecha" for="fecha">
          Seleccionar por fecha:
        </label>
        <input className="input-fecha" type="date" name="fecha" />
      </div>
      <h1>Descripción</h1>

      <div className="teacher-info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem distinctio necessitatibus voluptas sint repellendus nam vel
          sequi. Eaque commodi at libero iste, nam earum voluptatibus suscipit
          facere officiis provident!orem, ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatibus autem distinctio necessitatibus
          voluptas sint repellendus nam vel sequi. Eaque commodi at libero iste,
          nam earum voluptatibus suscipit facere officiis provident!orem, ipsum
          dolor sit amet consectetur adipisicing elit. Voluptatibus autem
          distinctio necessitatibus voluptas sint repellendus nam vel sequi.
          Eaque commodi at libero iste, nam earum voluptatibus suscipit facere
          officiis provident!orem, ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatibus autem distinctio necessitatibus voluptas sint
          repellendus nam vel sequi. Eaque commodi at libero iste, nam earum
          voluptatibus suscipit facere officiis provident!
        </p>
        <div className="button-box">
          <Button
            className="btn-editar"
            type="button"
            value="Editar"
            backgroundColor="#FF7878"
            color="#fff"
          />
          <Button type="button" value="Eliminar" backgroundColor="#4E4E4E" color="#fff"/>
        </div>
      </div>
      <div className="teacher-info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          autem distinctio necessitatibus voluptas sint repellendus nam vel
          sequi. Eaque commodi at libero iste, nam earum voluptatibus suscipit
          facere officiis provident!
        </p>
        <div className="button-box">
          <Button
            className="btn-editar"
            type="button"
            value="Editar"
            backgroundColor="#FF7878"
            color="#fff"
          />
          <Button type="button" value="Eliminar" backgroundColor="#4E4E4E" color="#fff"/>
        </div>
      </div>
    </StyledTable>
  );
}
