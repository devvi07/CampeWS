const express = require("express");
const router = express.Router();
const rutasController = require("../controllers/rutasController");

router.get("/", rutasController.getRutas);
router.post("/", rutasController.crearRutas);

module.exports = router;