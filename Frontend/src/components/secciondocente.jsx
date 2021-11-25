import React from "react";
import {  Route, useParams, useRouteMatch } from "react-router-dom";
import "../assets/css/secciondocente.css";

const Item = () => {
    const { name } = useParams();
  
    return (
      <div>
        <h3>{name}</h3>
      </div>
    );
  }
  
  const SeccionDocente = () => {
    const { path } = useRouteMatch();
  
    return (
      <div className="secciondocente">
        <h1 className="text-center">Docentes</h1>
        <div className="container d-lg-flex justify-content-lg-center align-items-lg-center">
        <div className="col-md-9 text-center">
            <span><label className="form-label">Numero de Semana:      </label>
                <label className="form-label">Día de Semana: </label>
                <select>
                    <optgroup label="Semana">
                        <option value="" selected="">Semana 1</option>
                        <option value="13">Semana 2</option>
                        <option value="14">Semana 3</option>
                    </optgroup>
                </select>
                  
                   
                <select>
                    <optgroup label="Dia">
                        <option value="12" selected="">Lunes</option>
                        <option value="13">Martes</option>
                        <option value="14">Miercoles</option>
                        <option value="">Jueves</option>
                        <option value="">Viernes</option>
                    </optgroup>
                </select>
                
            </span>
            
            <div></div><label>Descripción:</label>
            <div></div><textarea></textarea>
            <div></div>
            <div></div>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="celda">Actividad 1</td>
                            <td>
                                <button className="btn btn-primary editar" type="button">Editar</button>
                                <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="celda">Actividad 2</td>
                            <td>
                                <button className="btn btn-primary editar" type="button">Editar</button>
                                <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Actividad 3</td>
                            <td>
                                <button className="btn btn-primary editar" type="button">Editar</button>
                                <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Actividad 4</td>
                            <td>
                                <button className="btn btn-primary editar" type="button">Editar</button>
                                <button className="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Actividad 5</td>
                            <td>
                                <button className="btn btn-primary editar" type="button">Editar</button>
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
export default SeccionDocente;