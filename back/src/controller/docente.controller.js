const docenteCtrl = {}
const Docente = require('../models/docente.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

docenteCtrl.crear = async (req,res)=>{
    const {nombres,apellidos,correo,contrasena} = req.body
    const NuevoDocente = new Docente({
        nombres,
        apellidos,
        correo,
        contrasena
    })

    const correoDocente = await Docente.findOne({correo:correo})

    if(correoDocente){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }else{
        NuevoDocente.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoDocente._id},'Secreta')
        await NuevoDocente.save()
        res.json({
            mensaje: 'Docente Registrado',
            id: NuevoDocente._id,
            nombres:NuevoDocente.nombres,
            token,
            tipoUsuario: NuevoDocente.tipoUsuario
        })
    }
}

docenteCtrl.login = async(req,res)=>{
    const {correo,contrasena} = req.body
    const docente = await Docente.findOne({correo:correo})
    if(!docente){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

const match = await bcrypt.compare(contrasena,docente.contrasena)

if(match){
    const token = jwt.sign({_id: docente._id},'Secreta')
    res.json({
        mensaje: 'Has iniciado sesión',
        id: docente.id,
        nombres: docente.nombres,
        token,
        tipoUsuario: docente.tipoUsuario
    })
}else{
    res.json({
        mensaje: 'Contraseña incorrecta'
    })
}

}

docenteCtrl.listarId = async(req,res) => {
    const id =req.params.id
    const respuesta = await Docente.findById({_id: id})
    res.json(respuesta)
}

docenteCtrl.listar = async(req,res) => {
    const respuesta = await Docente.find()
    res.json(respuesta)
}

module.exports=docenteCtrl