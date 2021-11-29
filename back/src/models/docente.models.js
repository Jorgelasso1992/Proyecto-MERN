const mongoose = require('mongoose')
const { Schema } = mongoose

const DocenteSchema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
<<<<<<< HEAD
    contrasena: String,
    identificacion: String,
    contacto: String,
    date: { type: Date, default: Date.now }
=======
    contrasena:String,
    tipoUsuario: { type: String, default: 'docente'},
    date:{type:Date, default: Date.now}
>>>>>>> origin/Miguel
})

//convertir a modelo

module.exports = mongoose.model('docentes', DocenteSchema)