const mongoose = require('mongoose')
const {Schema} = mongoose

const DocenteSchema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    contrasena:String,
    date:{type:Date, default: Date.now}
})

//convertir a modelo

module.exports = mongoose.model('docentes',DocenteSchema)