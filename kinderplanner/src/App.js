import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Usuario from "./components/SeccionUsuario";
import Docente from "./components/secciondocente";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/seccionusuario">Usuario</Link>
          </li>
          <li>
            <Link to="/secciondocente">Docente</Link>
          </li>
        </ul>
      </nav>
      <Routes>
      
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/seccionusuario">
          <Usuario />
        </Route>
        <Route path="/secciondocente">
          <Docente />
        </Route>
      </Routes>
    </div>
    
  );
}
