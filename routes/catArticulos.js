const express = require("express");
const router = express.Router();
const catArticuloController = require("../controllers/catArticulosController");

router.get("/", catArticuloController.getCatArticulos);
router.post("/", catArticuloController.crearArticulo);

module.exports = router;