const {Router} = require('express')
const router = Router()
const AdminCtrl = require('../controller/admin.controller')
const Auth = require('../helper/Auth')

router.post('/crear',AdminCtrl.crear)
router.post('/login',AdminCtrl.login)
router.get('/listar/:id',Auth.verificarToken,AdminCtrl.listarId)

module.exports = router