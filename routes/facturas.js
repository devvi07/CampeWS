const express = require("express");
const router = express.Router();
const facturaController = require("../controllers/facturaController");

router.get("/", facturaController.getFacturas);
router.get("/:id", facturaController.getFacturasById);
router.post("/", facturaController.crearFactura);
router.put("/:id", facturaController.actualizaFactura);
router.delete("/:id", facturaController.eliminaFactura);

module.exports = router;