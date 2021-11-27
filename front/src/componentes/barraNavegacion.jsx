import React, {useState,useEffect} from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';


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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">KinderPlanner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/registrarDocente" hidden={afuera}>Registrarse</Nav.Link>

                            <NavDropdown title="Ingresar" id="basic-nav-dropdown" hidden={afuera}>
                                <NavDropdown.Item href="/ingresarDocente" hidden={afuera}>Docente</NavDropdown.Item>
                                <NavDropdown.Item href="/ingresarAdmin" hidden={afuera}>Administrador</NavDropdown.Item>
                            </NavDropdown>

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


