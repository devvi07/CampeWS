const express = require("express");
const router = express.Router();
const articuloController = require("../controllers/articulosController");

router.get("/", articuloController.getArticulos);
router.post("/", articuloController.crearArticulos);

module.exports = router;