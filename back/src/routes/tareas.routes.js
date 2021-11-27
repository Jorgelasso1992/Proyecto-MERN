const { Router } = require('express')
const router = Router()
const TareasCtrl = require('../controller/tareas.controller')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken, TareasCtrl.crear)
router.get('/listarTareas', Auth.verificarToken, TareasCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, TareasCtrl.listarId)
/*router.get('/listarCriterio/:criterio',Auth.verificarToken,PersonaCtrl.buscarPersonaCriterio)*/
router.delete('/eliminar/:id', Auth.verificarToken, TareasCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, TareasCtrl.actualizar)
router.get('/listarTareasDocente/:id', Auth.verificarToken, TareasCtrl.tareasDeUnDocente)

module.exports = router