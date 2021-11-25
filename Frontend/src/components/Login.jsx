import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Login.css";
import logo from "../assets/img/KinderPlannerLogo.jpg"
import avatar from "../assets/img/avatar_2x.png"
import { BrowserRouter as Link } from "react-router-dom";

const handleSubmit = (e)=>{
    e.preventDefault();
}

const Login = () => {
    return (
        <div className="Login">
            <div className="login-card-login">
                <img className="img-fluid" src={logo} alt="Logo">
                </img>
                <p className="profile-name-card-login">
                    <img className="profile-img-card-login" src={avatar} alt="Avatar" />
                </p>
                <form className="form-signin-login" onSubmit={handleSubmit}>
                    <span className="reauth-email-login">
                    </span>
                    <input className="form-control-login" type="email" id="inputEmail" placeholder="Correo" required="" autofocus="">
                    </input>
                    <input className="form-control-login" type="password" id="inputPassword" required="" placeholder="Contraseña">
                    </input>
                    <button className="btn btn-primary btn-lg d-block btn-signin w-100" type="submit">
                        Iniciar Sesión
                    </button>
                </form>    
            </div>
        </div>
    );
}

export default Login;
