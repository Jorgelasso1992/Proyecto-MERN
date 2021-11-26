const {Router} = require('express');
const router = Router();
const usuarioController=require('../controller/usuario.controller');

router.post('/crearusuario', usuarioController.crearUsuario);
router.post('/login', usuarioController.login);

module.exports=router;