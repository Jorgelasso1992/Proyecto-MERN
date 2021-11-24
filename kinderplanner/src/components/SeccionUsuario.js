import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import "../assets/css/SeccionUsuario.css";

const Item = () => {
    const { name } = useParams();
  
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }

const SeccionUsuario = () => {
    const { url, path } = useRouteMatch();
  
    return (
      <div>
          <h1 >Mi Planeador</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-6" >
                        <label class="form-label" >Numero de Semana:</label>
                        <input type="text" />
                        <label class="form-label" >Día de la Semana:</label>
                        <input type="text"/>
                        <label class="form-label">Descripcion de la Actividad:</label>
                        <textarea class="areatextdescripcion" ></textarea>
                        <label class="form-label">Duracion de la Actividad:</label>
                        <textarea class="areaduracion">
                        </textarea>
                        <button class="guardaractividad" type="button">Guardar Actividad</button>
                    </div>
                </div>
                <div class="column">
                    <label class="form-label">Numero de Semana:</label>
                    <label class="form-label">Día de Semana:</label>
                    <input type="text"/>
                    <input type="text"/>
                    <label class="form-label-descripcion">Descripción:</label>
                    <textarea class="areadescripcion"></textarea>
                    <div></div>
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td class="celdatabla" >Actividad 1</td>
                                    <td><button class="btn btn-primary editar" type="button" >Editar</button>
                                        <button class="btn btn-primary eliminar" type="button" >Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="celdatabla">Actividad 2</td>
                                    <td >
                                        <button class="editar" type="button">Editar</button>
                                        <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="celdatabla">Actividad 3</td>
                                    <td>
                                        <button class="editar" type="button">Editar</button>
                                        <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="celdatabla">Actividad 4</td>
                                    <td>
                                        <button class="editar" type="button">Editar</button>
                                        <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Actividad 5</td>
                                    <td>
                                        <button class="editar" type="button">Editar</button>
                                        <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>          
        <Route path={`${path}/:name`}>
          <Item />
        </Route>
      </div>
    );
  };


export default SeccionUsuario;