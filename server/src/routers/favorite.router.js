const { Router } = require('express');
const router = Router();
const favoriteCtrl = require('../controller/favorite.controller');
const verificarToken = require("../helpers/middlewareAutentificacion");

router.get('/favorite',verificarToken, favoriteCtrl.getFavorites);
router.put('/favorite',verificarToken, favoriteCtrl.putFavorites);

module.exports = router;