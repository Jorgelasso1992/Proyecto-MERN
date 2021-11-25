import React from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
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
    const { path } = useRouteMatch();
  
    return (
      <div>
          <h1 >Mi Planeador</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" >
                        <label className="form-label" >Numero de Semana:</label>
                        <input type="text" />
                        <label className="form-label" >Día de la Semana:</label>
                        <input type="text"/>
                        <label className="form-label">Descripcion de la Actividad:</label>
                        <textarea className="areatextdescripcion" ></textarea>
                        <label className="form-label">Duracion de la Actividad:</label>
                        <textarea className="areaduracion">
                        </textarea>
                        <button className="guardaractividad" type="button">Guardar Actividad</button>
                    </div>
                </div>
                <div className="column">
                    <label className="form-label">Numero de Semana:</label>
                    <label className="form-label">Día de Semana:</label>
                    <input type="text"/>
                    <input type="text"/>
                    <label className="form-label-descripcion">Descripción:</label>
                    <textarea className="areadescripcion"></textarea>
                    <div></div>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="celdatabla" >Actividad 1</td>
                                    <td><button className="btn btn-primary editar" type="button" >Editar</button>
                                        <button className="btn btn-primary eliminar" type="button" >Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="celdatabla">Actividad 2</td>
                                    <td >
                                        <button className="editar" type="button">Editar</button>
                                        <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="celdatabla">Actividad 3</td>
                                    <td>
                                        <button className="editar" type="button">Editar</button>
                                        <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="celdatabla">Actividad 4</td>
                                    <td>
                                        <button className="editar" type="button">Editar</button>
                                        <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="celdatabla">Actividad 5</td>
                                    <td>
                                        <button className="editar" type="button">Editar</button>
                                        <button className="btn btn-primary eliminar" type="button">Eliminar</button>
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