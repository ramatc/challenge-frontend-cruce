const express= require("express");
const router= express.Router();
const mainController = require("../controllers/mainController")

router.get('/', mainController.index);
router.get('/list', mainController.list);
router.get('/form', mainController.form);

module.exports = router;