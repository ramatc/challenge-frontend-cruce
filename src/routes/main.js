const express= require("express");
const router= express.Router();
const mainController = require("../controllers/mainController")

//MAIN ROUTES
router.get('/', mainController.index);
router.get('/list', mainController.list);

//ROUTE DELETE PRODUCT
router.delete("/:id", mainController.destroy);

module.exports = router;