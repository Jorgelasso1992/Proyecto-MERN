const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser')
require('./database')

app.set('Port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/docente',require('./routes/docente.routes'))
app.use('/tareas',require('./routes/tareas.routes'))

app.listen(app.get('Port'),()=>{
    console.log('Hola soy el servidor - Puerto: ',app.get('Port'))
})