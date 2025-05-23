const { Router } = require('express');
const router = Router();
const readCtrl = require('../controller/read.controller');
const verificarToken = require("../helpers/middlewareAutentificacion");

router.get('/read',verificarToken, readCtrl.getRead);
router.put('/read',verificarToken, readCtrl.putRead);

module.exports = router;