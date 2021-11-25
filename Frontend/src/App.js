import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Registro from "./components/Registro"
import SeccionDocente from "./components/secciondocente";
import SeccionUsuario from "./components/SeccionUsuario";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/users"} className="nav-link">
                    Usuarios
                  </Link>
                </Nav>
              </Nav>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </Nav>
              </Nav>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/registro"} className="nav-link">
                    Registrarse
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={SeccionDocente} />
                  <Route path="/users" component={SeccionUsuario} />
                  <Route path="/login" component={Login} />
                  <Route path="/registro" component={Registro} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
export default App;
