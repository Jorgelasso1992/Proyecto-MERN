import React, {useState,useEffect} from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import logo from "../assets/img/KinderPlannerLogo.jpg"


export default function BarraNavegacion() {

    const[adentro,setAdentro] = useState(true)
<<<<<<< HEAD
    // const[afuera,setAfuera] = useState(false)
    const[showAdmin,setShowAdmin] = useState(true)

    useEffect(() => {
       if(sessionStorage.getItem('token') && sessionStorage.getItem('tipoUsuario')==='docente'){
            setAdentro(false)
            // setAfuera(true)
            setShowAdmin(true)
       }else if(sessionStorage.getItem('token') && sessionStorage.getItem('tipoUsuario')==='admin'){
            setAdentro(true)
            // setAfuera(true)
            setShowAdmin(false)
=======
    const[afuera,setAfuera] = useState(false)

    useEffect(() => {
       if(sessionStorage.getItem('token')){
           setAdentro(false)
           setAfuera(true)
>>>>>>> 3c24a61c98a4def87719a4cea54dc9809a5ef470
       }
        
    },[])

    const salir=() => {
        sessionStorage.clear()
        window.localStorage.href="/"
    }

    return (
        <div>
<<<<<<< HEAD
            <Navbar bg="#FF7878" expand="lg" style={{backgroundColor: "#FF7878", fontSize:'20px'}}>
=======
            <Navbar bg="#FF7878" expand="lg" style={{backgroundColor: "#FF7878"}}>
>>>>>>> 3c24a61c98a4def87719a4cea54dc9809a5ef470
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="Logo" style={{width:250, heigh: 50, padding:0, margin:0}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
<<<<<<< HEAD
                    <Nav className="me-auto">

                            <NavDropdown title="Menu" id="basic-nav-dropdown" hidden={adentro}>
=======
                        <Nav className="me-auto">
                            <Nav.Link href="/registrarDocente" hidden={afuera}>Registrarse</Nav.Link>
                            <Nav.Link href="/ingresarDocente" hidden={afuera}>Ingresar</Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown" hidden={adentro}>
                                <NavDropdown.Item href="/perfilDocente" hidden={adentro}>Mi Perfil</NavDropdown.Item>
>>>>>>> 3c24a61c98a4def87719a4cea54dc9809a5ef470
                                <NavDropdown.Item href="/seccionTareas" hidden={adentro}>Tareas</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/" onClick={()=>salir()} hidden={adentro}>Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
<<<<<<< HEAD

                            <NavDropdown title="Menu" id="basic-nav-dropdown" hidden={showAdmin}>
                                <NavDropdown.Item href="/administradorDocentes" hidden={showAdmin}>Docentes</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="/" onClick={()=>salir()} hidden={showAdmin}>Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown> 

                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text hidden={adentro}>Bienvenido(a): {sessionStorage.getItem('nombres')}</Navbar.Text>
                    <Navbar.Text hidden={showAdmin}>Administrador(a): {sessionStorage.getItem('nombres')}</Navbar.Text>
=======
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text hidden={adentro}>Bienvenido(a): {sessionStorage.getItem('nombres')}</Navbar.Text>
>>>>>>> 3c24a61c98a4def87719a4cea54dc9809a5ef470
                </Container>
            </Navbar>
        </div>
    )
}


