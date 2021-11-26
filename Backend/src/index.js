//Importamos las dependencias necesarias para el proyecto
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require('./database')

//Configuración del puerto dinámico
app.set('Puerto', process.env.PORT || 4000);
app.use(morgan('dev'));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origen: '*' }));

//Rutas
app.use('/usuario',require('./routes/usuario.route'));

//Server Listening
app.listen(app.get('Puerto'), () => {
    console.log('Servidor escucha por el puerto', app.get('Puerto'))
});

