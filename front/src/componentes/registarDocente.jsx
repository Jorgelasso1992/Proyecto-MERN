import Swal from 'sweetalert2'
import Axios from 'axios'
import React, { useState } from 'react'
import "../assets/css/Registro.css";
import logo from "../assets/img/KinderPlannerLogo2.jpg"

export default function RegistarDocente() {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [contacto, setContacto] = useState('')
    const [contrasena, setContrasena] = useState('')

    const registro = async (e) => {
        e.preventDefault()
        const usuario = { nombres, apellidos, correo, contrasena, identificacion, contacto }
        const respuesta = await Axios.post('./docente/crear', usuario)
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje

        if (mensaje !== 'Docente Registrado') {
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Docente Registrado',
                showConfirmButton: false,
                timer: 1500
            })

            setTimeout(() => {
                window.location.href = '/'
            }, 1600)
        }
    }

    return (
        <div className="Registro">
            <form className="login-card" onSubmit={registro}>
                <img className="img-fluid" src={logo} alt="Logo" />
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="email" id="inputEmail" placeholder="Nombres:" required="" autofocus="" onChange={(e) => setNombres(e.target.value)} />
                    <input className="form-control" type="email" id="inputEmail-4" placeholder="Apellidos:" required="" autofocus="" onChange={(e) => setApellidos(e.target.value)} />
                    <div className="checkbox" />
                </form>
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="email" id="inputEmail-6" placeholder="Identificación:" required="" autofocus="" onChange={(e) => setIdentificacion(e.target.value)} />
                    <input className="form-control" type="email" id="inputEmail-7" placeholder="Contacto:" required="" autofocus="" onChange={(e) => setContacto(e.target.value)} />
                    <div className="checkbox" />
                </form>
                <form className="form-signin">
                    <span className="reauth-email" />
                    <input className="form-control" type="email" id="inputEmail-3" placeholder="Correo:" required="" autofocus="" onChange={(e) => setCorreo(e.target.value)} />
                    <input className="form-control" type="password" id="inputEmail-1" placeholder="Contraseña" required="" autofocus="" onChange={(e) => setContrasena(e.target.value)} />
                    <div className="checkbox" />
                </form>
                <button className="btn btn-primary d-block btn-signin mt-3 " type="submit">
                    Crea tu cuenta
                </button>
            </form>
        </div>
    )
}