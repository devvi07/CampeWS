const express = require("express");
const router = express.Router();
const pagoController = require("../controllers/pagoController");

router.get("/", pagoController.getPagos);
router.get("/:id", pagoController.getPagosById);
router.post("/", pagoController.crearPago);
router.put("/:id", pagoController.actualizaPago);
router.delete("/:id", pagoController.eliminaPago);

module.exports = router;