import React from 'react'
import {Form} from 'react-bootstrap'

export default function administradorDocentes() {
    return (
        <div>
            <h1>Bienvenido Administrador: {sessionStorage.getItem('nombres')}</h1>
            
        </div>
    )
}
