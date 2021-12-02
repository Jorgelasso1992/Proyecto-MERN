import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './componentes/home'
import BarraNavegacion from './componentes/barraNavegacion'
import RegistrarDocente from './componentes/registarDocente'
import IngresarDocente from './componentes/ingresarDocente'
<<<<<<< HEAD
import SeccionTareas from './componentes/seccionTareas'
import IngresarAdmin from './componentes/ingresarAdmin'
import AdministradorDocentes from './componentes/administradorDocentes'

=======
import PerfilDocente from './componentes/perfilDocente'
import SeccionTareas from './componentes/seccionTareas'
>>>>>>> 3c24a61c98a4def87719a4cea54dc9809a5ef470

function App() {
  return (
    <div>
      <Router>
        <BarraNavegacion/>
        <Route path='/' exact component={Home}/>
        <Route path='/registrarDocente' exact component={RegistrarDocente}/>
        <Route path='/ingresarDocente' exact component={IngresarDocente}/>
<<<<<<< HEAD
        <Route path='/seccionTareas' exact component={SeccionTareas}/>
        <Route path='/ingresarAdmin' exact component={IngresarAdmin}/>
        <Route path='/administradorDocentes' exact component={AdministradorDocentes}/>
=======
        <Route path='/perfilDocente' exact component={PerfilDocente}/>
        <Route path='/seccionTareas' exact component={SeccionTareas}/>
>>>>>>> 3c24a61c98a4def87719a4cea54dc9809a5ef470
      </Router>
    </div>
  );
}

export default App;
