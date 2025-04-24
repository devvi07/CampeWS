const Pagos = require("../models/Pago");

exports.getPagos = async (req, res) => {
  const pago = await Pagos.find().populate('usuario');
  res.json(pago);
};

exports.crearPago = async (req, res) => {
  const nuevo = new Pagos(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.getPagosById = async (req, res) => {
  try {
    const pago = await Pagos.findById(req.params.id);
    if (!pago) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(pago);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.actualizaPago = async (req, res) => {
  try {
    const actualizado = await Pagos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminaPago = async (req, res) => {
  try {
    const eliminado = await Pagos.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Pago eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};