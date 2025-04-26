const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.obtenerUsuarios);
router.get("/:id", usuarioController.obtenerUsuario);
router.post("/", usuarioController.crearUsuario);
router.put("/:id", usuarioController.actualizarUsuario);
router.delete("/:id", usuarioController.eliminarUsuario);
router.post("/login", usuarioController.login); 
router.get("/tipoUsuario/:id", usuarioController.obtenerClientes);

module.exports = router;