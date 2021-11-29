const TareasCtrl = {}
const Tarea = require('../models/tareas.models')

TareasCtrl.crear = async(req,res) => {
    const {titulo,descripcion,correoDocente,fechaEntrega} = req.body
    const NuevaTarea = new Tarea({
        titulo,
        descripcion,
        correoDocente,
        fechaEntrega
    })

    const respuesta = await NuevaTarea.save()
    res.json({
        mensaje: 'Tarea Creada',
        respuesta
    })
}

TareasCtrl.listar = async(req,res) => {
    const respuesta = await Tarea.find()
    res.json(respuesta)
}

TareasCtrl.listarId = async(req,res) => {
    const id =req.params.id
    const respuesta = await Tarea.findById({_id: id})
    res.json(respuesta)
}

//-------------------------------------------------
TareasCtrl.tareasDeUnDocente = async(req,res) => {
    const id =req.params.id
    const respuesta = await Tarea.find({correoDocente: id})
    res.json(respuesta)
}

TareasCtrl.eliminar = async(req,res) => {
    const id = req.params.id
    await Tarea.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Tarea eliminada'
    })
}

TareasCtrl.actualizar = async(req,res) => {
    const id = req.params.id
    await Tarea.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Tarea actualizada'
    })
}

module.exports = TareasCtrl