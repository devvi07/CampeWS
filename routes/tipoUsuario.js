const express = require("express");
const router = express.Router();
const tipoUsuarioController = require("../controllers/tipoUsuarioController");

router.get("/", tipoUsuarioController.getAllTipoUsuarios);
router.post("/", tipoUsuarioController.crearTipoUsuario);

module.exports = router;