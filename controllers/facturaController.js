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

exports.getFacturasById = async (req, res) => {
  try {
    const factura = await Factura.findById(req.params.id);
    if (!factura) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(factura);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.actualizaFactura = async (req, res) => {
  try {
    const actualizado = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminaFactura = async (req, res) => {
  try {
    const eliminado = await Factura.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Factura eliminada" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};