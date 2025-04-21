const Rutas = require("../models/Rutas");

exports.getRutas = async (req, res) => {
  const rutas = await Rutas.find();
  res.json(rutas);
};

exports.crearRutas = async (req, res) => {
  const nuevo = new Rutas(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};