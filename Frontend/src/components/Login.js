import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Login.css";
import logo from "../assets/img/KinderPlannerLogo.jpg"
import avatar from "../assets/img/avatar_2x.png"

export default class Login extends Component {
    render() {
        return (
            <div className="Login">
                <div className="login-card">
                    <img className="img-fluid" src={logo} alt="Logo">
                    </img>
                    <p className="profile-name-card">
                        <img className="profile-img-card" src={avatar} alt="Avatar"/> 
                    </p>
                    <form className="form-signin">
                        <span className="reauth-email"> 
                        </span>
                        <input className="form-control" type="email" id="inputEmail" placeholder="Correo" required="" autofocus="">
                        </input>
                        <input className="form-control" type="password" id="inputPassword" required="" placeholder="Contraseña">
                        </input>
                        <div className="checkbox">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="formCheck-1">
                                </input>
                                <label className="form-check-label" for="formCheck-1">
                                    Recuérdame
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg d-block btn-signin w-100" type="submit">
                            Iniciar Sesión
                        </button>
                    </form>
                    <a className="forgot-password" href="/forgot-password">
                        Olvidaste tu contraseña?
                    </a>
                </div>

            </div>
        );
    }
}
