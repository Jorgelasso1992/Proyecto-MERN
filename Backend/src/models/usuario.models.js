const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombres: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    apellidos: {
        type: String
    },
    identificacion: {
        type: Number,
        required: [true, 'Documento de identidad oligatorio']
    },
    contacto: {
        type: Number
    },
    correo: {
        type: String,
        required: [true, 'Correo Obligatorio']
    },
    contrasena: {
        type: String,
        required: [true, 'Contraseña obligatoria']
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('usuario', usuarioSchema);