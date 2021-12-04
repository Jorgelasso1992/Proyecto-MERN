const mongoose = require('mongoose')
const { Schema } = mongoose

const DocenteSchema = new Schema({
    nombres: { type: String, required: [true, 'Digita tu nombre'] },
    apellidos: { type: String },
    correo: { type: String, required: [true, 'Correo obligatorio'] },
    contrasena: { type: String, required: [true, 'Contraseña obligatoria'] },
    identificacion: { type: Number, required: [true, 'Documento de identidad obligatorio'] },
    contacto: { type: Number },
    tipoUsuario: { type: String, default: 'docente' },
    date: { type: Date, default: Date.now }
})

//convertir a modelo

module.exports = mongoose.model('docentes', DocenteSchema)