const TipoArticulo = require("../models/TipoArticulo");

exports.getTipoArticulos = async (req, res) => {
  const tipoArticulos = await TipoArticulo.find();
  res.json(tipoArticulos);
};

exports.crearTipoArticulo = async (req, res) => {
  const nuevo = new TipoArticulo(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};