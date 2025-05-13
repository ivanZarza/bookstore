const { Router } = require('express');
const router = Router();
const readCtrl = require('../controller/read.controller');

router.get('/read', readCtrl.getRead);
router.put('/read', readCtrl.putRead);

module.exports = router;