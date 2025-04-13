const Factura = require("../models/Factura");

exports.getFacturas = async (req, res) => {
  const facturas = await Factura.find().populate('usuario');
  res.json(facturas);
};

exports.crearFactura = async (req, res) => {
  const nuevo = new Factura(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};