import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/Registro.css";
import logo from "../assets/img/KinderPlannerLogo.jpg"

const handleSubmit = (e) => {
    e.preventDefault();
}

const Registro = () => {
    return (
        <div className="Registro">
            <div className="login-card">
                <img className="img-fluid" src={logo} alt="Logo" />
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="email" id="inputEmail" placeholder="Nombres:" required="" autofocus="" />
                    <input className="form-control" type="email" id="inputEmail-4" placeholder="Apellidos:" required="" autofocus="" />
                    <div className="checkbox" />
                </form>
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="email" id="inputEmail-6" placeholder="Identificación:" required="" autofocus="" />
                    <input className="form-control" type="email" id="inputEmail-7" placeholder="Contacto:" required="" autofocus="" />
                    <div className="checkbox" />
                </form>
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="email" id="inputEmail-3" placeholder="Correo:" required="" autofocus="" />
                    <input className="form-control" type="email" id="inputEmail-5" placeholder="Confirmar correo:" required="" autofocus="" />
                    <div className="checkbox" />
                </form>
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="password" id="inputEmail-1" placeholder="Contraseña" required="" autofocus="" />
                    <input className="form-control" type="password" id="inputEmail-2" placeholder="Confirmar contraseña;" required="" autofocus="" />
                    <div className="checkbox" />
                </form>
                <button className="btn btn-primary d-block btn-signin mt-3 " type="submit">
                    Crea tu cuenta
                </button>
            </div>
        </div>
    );
}

export default Registro;
