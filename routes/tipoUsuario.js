const express = require("express");
const router = express.Router();
const tipoUsuarioController = require("../controllers/tipoUsuarioController");

router.get("/", tipoUsuarioController.getAllTipoUsuarios);
router.get("/:id", tipoUsuarioController.getTipoUsuario);
router.post("/", tipoUsuarioController.crearTipoUsuario);
router.put("/:id", tipoUsuarioController.actualizarTipoUsuario);
router.delete("/:id", tipoUsuarioController.eliminarTipoUsuario);

module.exports = router;