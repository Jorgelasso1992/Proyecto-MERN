import React from 'react'
import {Button} from 'react-bootstrap';

export default function home() {

    const ingresar = async() => {
        window.location.href='/ingresarDocente'
    }

    const registrarse = async() => {
        setTimeout(() => {
            window.location.href='/registrarDocente'
        },1600)
    }
    

    return (
        <div>
            <Button variant="primary" onClick={registrarse}>
              Registrarse
            </Button>

            <Button variant="primary" onClick={ingresar}>
              Ingresar
            </Button>
        </div>
    )
}
