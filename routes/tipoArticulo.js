const express = require("express");
const router = express.Router();
const tipoArticuloController = require("../controllers/tipoArticuloController");

router.get("/", tipoArticuloController.getTipoArticulos);
router.post("/", tipoArticuloController.crearTipoArticulo);

module.exports = router;