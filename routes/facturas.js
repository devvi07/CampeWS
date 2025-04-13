const express = require("express");
const router = express.Router();
const facturaController = require("../controllers/facturaController");

router.get("/", facturaController.getFacturas);
router.post("/", facturaController.crearFactura);

module.exports = router;