
import {Form,Button} from 'react-bootstrap';
import Swal from 'sweetalert2'
import Axios from 'axios'
import React, {useState} from 'react'

export default function IngresarDocente() {

    const [correo,setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')

    const login = async(e) => {
    e.preventDefault();
    const usuario = {correo,contrasena}
    const respuesta = await Axios.post('/docente/login',usuario)
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje

    if(mensaje!=='Has iniciado sesión'){
        Swal.fire({
            icon:'error',
            title:mensaje,
            showConfirmButton: false,
            timer:1500
        })
    }else{
        const token = respuesta.data.token
        const nombres = respuesta.data.nombres 
        const idUsuario = respuesta.data.id 

        sessionStorage.setItem('token',token)
        sessionStorage.setItem('nombres',nombres)
        sessionStorage.setItem('idUsuario',idUsuario)

        Swal.fire({
            icon:'success',
            title:mensaje,
            showConfirmButton: false,
            timer:2000
        })

        window.location.href='/perfilDocente'
        }
    }

    return (
        <div style={formulario} >
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="correo">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar correo" onChange = {(e) => setCorreo(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="contrasena">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar contraseña" onChange = {(e) => setContrasena(e.target.value)}/>
                </Form.Group>
                
                <Button style={boton} variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        
        </div>
    )
}

const formulario = {
    width: '70%',
    margin: 'auto'
}

const boton = {
    background: '#000000'
}
