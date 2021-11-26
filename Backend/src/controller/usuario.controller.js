const usuarioController = {};
const usuario = require('../models/usuario.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

usuarioController.crearUsuario = async (req, res) => {
    const { nombres, apellidos, identificacion, contacto, correo, contrasena } = req.body;
    const nuevoUsuario = new usuario({
        nombres,
        apellidos,
        identificacion,
        contacto,
        correo,
        contrasena,
    });

    //Validaciones para correo no repetido
    const correoUsuario = await usuario.findOne({ correo: correo });
    const idUsuario = await usuario.findOne({ identificacion: identificacion });
    if (correoUsuario) {
        res.json({
            mensaje: 'El correo ya existe'
        });
    }
    if (idUsuario) {
        res.json({
            mensaje: 'El usuario ya está registrado'
        });
    } else {
        nuevoUsuario.contrasena = await bcrypt.hash(contrasena, 10);
        const token = jwt.sign({ _id: nuevoUsuario._id }, "Secreta");
        await nuevoUsuario.save();
        res.json({
            mensaje: 'Bienvenido',
            id: nuevoUsuario._id,
            nombre: nuevoUsuario.nombres,
            token
        });
    }


    // const respuesta = await nuevoUsuario.save();
    // res.json({
    //     mensaje: 'Usuario creado correctamente',
    //     respuesta
    // });
}

usuarioController.login = async (req, res) => {
    const { correo, contrasena } = req.body;
    const usuarioLogin = await usuario.findOne({ correo: correo });
    if (!usuarioLogin) {
        return res.json({
            mensaje: 'Correo incorrecto'
        });
    }

    const match = await bcrypt.compare(contrasena, usuarioLogin.contrasena);
    if (match) {
        const token = jwt.sign({ _id: usuarioLogin._id }, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: usuarioLogin.id,
            nombre: usuarioLogin.nombres,
            token
        });
    } else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        });
    }
}

module.exports = usuarioController;