const { Router } = require('express');
const router = Router();
const booksCtrl = require('../controller/books.controller');
const verificarToken = require("../helpers/middlewareAutentificacion");
const verificarSesion = require("../helpers/verificarSesion");


/* const handleResult = ctrlFn => async (req, res) => {
    const result = await ctrlFn(req)

    res.status(result.status).json({
        ok: result.status >= 200 && result.status < 400,
        data: result.data,
    })
} */
// router.get('/books', /* verificarToken, */ handleResult(booksCtrl.getbooks));

router.get('/books',  verificarToken, /* verificarSesion, */  booksCtrl.getbooks);
router.post('/books',  verificarToken, /* verificarSesion, */ booksCtrl.postbooks);
router.put('/books',  verificarToken, /* verificarSesion, */ booksCtrl.putbooks);
router.delete('/books',  verificarToken, /* verificarSesion, */ booksCtrl.deletebooks);

module.exports = router;

