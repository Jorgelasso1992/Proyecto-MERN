const {Router} = require('express')
const router = Router()
const DocenteCtrl = require('../controller/docente.controller')
const Auth = require('../helper/Auth')

router.post('/crear',DocenteCtrl.crear)
router.post('/login',DocenteCtrl.login)
router.get('/listar/:id',Auth.verificarToken,DocenteCtrl.listarId)

module.exports = router