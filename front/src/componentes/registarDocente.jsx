import {Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import Axios from 'axios'
import React, {useState} from 'react'

export default function RegistarDocente() {
    const [nombres,setNombres] = useState('')
    const [apellidos,setApellidos] = useState('')
    const [correo,setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')

    const registro = async (e) => {
        e.preventDefault()
        const usuario = {nombres,apellidos,correo,contrasena}
        const respuesta = await Axios.post('./docente/crear',usuario)
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Docente Registrado'){
            Swal.fire({
                icon:'error',
                title:mensaje,
                showConfirmButton:false,
                timer:1500
             })
        }else{
            Swal.fire({
                icon:'success',
                title:'Docente Registrado',
                showConfirmButton:false,
                timer:1500
             })

             setTimeout(() => {
                window.location.href='/'
            },1600)
        }
    }

    return (
        <div style={formulario} >
            <Form onSubmit={registro}>
                <Form.Group className="mb-3" controlId="nombres">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre(s)" onChange = {(e) => setNombres(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="apellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar apellido(s)" onChange = {(e) => setApellidos(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="correo">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar correo" onChange = {(e) => setCorreo(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="contrasena">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingresar contraseña" onChange = {(e) => setContrasena(e.target.value)}/>
                </Form.Group>
                
                <Button style={boton} variant="primary" type="submit">
                    Guardar
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
