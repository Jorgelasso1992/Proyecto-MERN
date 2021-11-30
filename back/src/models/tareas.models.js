const mongoose = require('mongoose')
const { Schema } = mongoose

const TareasSchema = new Schema({
    titulo: String,
    descripcion: String,
    correoDocente: String,
    date:{type:Date, default: Date.now},
    fechaEntrega: String
})

//convertir a modelo

module.exports = mongoose.model('tareas', TareasSchema)