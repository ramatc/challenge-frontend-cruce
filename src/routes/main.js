const express= require("express");
const router= express.Router();
const mainController = require("../controllers/mainController")

//Rutas principales
router.get("/", mainController.index);
router.get("/list", mainController.list);

//Ruta para crear un producto
router.get("/form", mainController.create);
router.post("/", mainController.store);

//Ruta para detalle un producto
router.get("/:id", mainController.detail);

//Rutas para editar un producto
router.get("/:id/edit", mainController.edit);
router.put("/:id", mainController.update);

//Ruta para eliminar un producto
router.delete("/:id", mainController.destroy);

module.exports = router;