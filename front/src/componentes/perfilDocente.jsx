import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import {Button,Form} from 'react-bootstrap'

export default function PerfilDocente() {

    const[nombres,setNombres]=useState('')
    const[apellidos,setApellidos]=useState('')
    const[correo,setCorreo]=useState('')
    const[contrasena,setContrasena]=useState('')
   
    const obtenerDocente = async() => {
        const id = sessionStorage.getItem('idUsuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/docente/listar/'+id,{
          headers:{'autorizacion':token}
        })
      
        console.log(respuesta.data)
      
        setNombres(respuesta.data.nombres)
        setApellidos(respuesta.data.apellidos)
        setCorreo(respuesta.data.correo)
        setContrasena(respuesta.data.contrasena)
      }

    obtenerDocente()
   
    return (

        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombres: </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{nombres}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellidos: </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{apellidos}</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo: </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{correo}</Form.Label>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Editar
                </Button>
            </Form>
        </div>
    )
}
