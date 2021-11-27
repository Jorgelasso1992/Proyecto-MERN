import React, {useState,useEffect} from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import logo from "../assets/img/KinderPlannerLogo.jpg"


export default function BarraNavegacion() {

    const[adentro,setAdentro] = useState(true)
    const[afuera,setAfuera] = useState(false)

    useEffect(() => {
       if(sessionStorage.getItem('token')){
           setAdentro(false)
           setAfuera(true)
       }
        
    },[])

    const salir=() => {
        sessionStorage.clear()
        window.localStorage.href="/"
    }

    return (
        <div>
            <Navbar bg="#FF7878" expand="lg" style={{backgroundColor: "#FF7878"}}>
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="Logo" style={{width:250, heigh: 50, padding:0, margin:0}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                            <NavDropdown title="Menu" id="basic-nav-dropdown" hidden={adentro}>
                                <NavDropdown.Item href="/perfilDocente" hidden={adentro}>Mi Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="/seccionTareas" hidden={adentro}>Tareas</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/" onClick={()=>salir()} hidden={adentro}>Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text hidden={adentro}>Bienvenido(a): {sessionStorage.getItem('nombres')}</Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}


