import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './componentes/home'
import BarraNavegacion from './componentes/barraNavegacion'
import RegistrarDocente from './componentes/registarDocente'
import IngresarDocente from './componentes/ingresarDocente'
import PerfilDocente from './componentes/perfilDocente'
import SeccionTareas from './componentes/seccionTareas'
import IngresarAdmin from './componentes/ingresarAdmin'
import AdministradorDocentes from './componentes/administradorDocentes'


function App() {
  return (
    <div>
      <Router>
        <BarraNavegacion/>
        <Route path='/' exact component={Home}/>
        <Route path='/registrarDocente' exact component={RegistrarDocente}/>
        <Route path='/ingresarDocente' exact component={IngresarDocente}/>
        <Route path='/perfilDocente' exact component={PerfilDocente}/>
        <Route path='/seccionTareas' exact component={SeccionTareas}/>
        <Route path='/ingresarAdmin' exact component={IngresarAdmin}/>
        <Route path='/administradorDocentes' exact component={AdministradorDocentes}/>
      </Router>
    </div>
  );
}

export default App;
