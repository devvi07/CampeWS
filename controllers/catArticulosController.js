const CatArticulo = require("../models/CatalogoArticulo");

exports.getCatArticulos = async (req, res) => {
  const articulos = await CatArticulo.find();
  res.json(articulos);
};

exports.crearArticulo = async (req, res) => {
  const nuevo = new CatArticulo(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};