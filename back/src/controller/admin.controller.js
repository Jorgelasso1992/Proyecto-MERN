const adminCtrl = {}
const Admin = require('../models/admin.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

adminCtrl.crear = async (req,res)=>{
    const {nombres,apellidos,correo,contrasena} = req.body
    const NuevoAdmin = new Admin({
        nombres,
        apellidos,
        correo,
        contrasena
    })

    const correoAdmin = await Admin.findOne({correo:correo})

    if(correoAdmin){
        res.json({
            mensaje: 'El correo ya existe'
        })
    }else{
        NuevoAdmin.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:NuevoAdmin._id},'Secreta')
        await NuevoAdmin.save()
        res.json({
            mensaje: 'Administrador Registrado',
            id: NuevoAdmin._id,
            nombres:NuevoAdmin.nombres,
            token,
            tipoUsuario: NuevoAdmin.tipoUsuario
        })
    }
}

adminCtrl.login = async(req,res)=>{
    const {correo,contrasena} = req.body
    const admin = await Admin.findOne({correo:correo})
    if(!admin){
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

const match = await bcrypt.compare(contrasena,admin.contrasena)

if(match){
    const token = jwt.sign({_id: admin._id},'Secreta')
    res.json({
        mensaje: 'Has iniciado sesión como Administrador',
        id: admin.id,
        nombres: admin.nombres,
        token,
        tipoUsuario: admin.tipoUsuario
    })
}else{
    res.json({
        mensaje: 'Contraseña incorrecta'
    })
}

}

adminCtrl.listarId = async(req,res) => {
    const id =req.params.id
    const respuesta = await Admin.findById({_id: id})
    res.json(respuesta)
}

module.exports=adminCtrl