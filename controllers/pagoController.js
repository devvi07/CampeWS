const Pagos = require("../models/Pago");

exports.getPagos = async (req, res) => {
  const pago = await Pagos.find();
  res.json(pago);
};

exports.crearPago = async (req, res) => {
  const nuevo = new Pagos(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};