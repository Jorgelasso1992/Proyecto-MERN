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
   
  
    return (
      <div>
        <h1 class="text-center">Docentes</h1>
        <div class="container d-lg-flex justify-content-lg-center align-items-lg-center">
        <div class="col-md-9 text-center">
            <span><label class="form-label">Numero de Semana:      </label>
                <label class="form-label">Día de Semana: </label>
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
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td className="celda">Actividad 1</td>
                            <td>
                                <button class="btn btn-primary editar" type="button">Editar</button>
                                <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="celda">Actividad 2</td>
                            <td>
                                <button class="btn btn-primary editar" type="button">Editar</button>
                                <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Actividad 3</td>
                            <td>
                                <button class="btn btn-primary editar" type="button">Editar</button>
                                <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Actividad 4</td>
                            <td>
                                <button class="btn btn-primary editar" type="button">Editar</button>
                                <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Actividad 5</td>
                            <td>
                                <button class="btn btn-primary editar" type="button">Editar</button>
                                <button class="btn btn-primary eliminar" type="button">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        
       
          
        
      </div>
    );
  };
export default SeccionDocente;