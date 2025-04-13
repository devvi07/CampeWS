const Articulos = require("../models/Articulo");

exports.getArticulos = async (req, res) => {
  const articulos = await Articulos.find();
  res.json(articulos);
};

exports.crearArticulos = async (req, res) => {
  const nuevo = new Articulos(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};