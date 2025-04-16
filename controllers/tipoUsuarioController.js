const TipoUsuario = require("../models/TipoUsuario");

exports.getAllTipoUsuarios = async (req, res) => {
  const tipoUsuarios = await TipoUsuario.find();
  res.json(tipoUsuarios);
};

exports.getTipoUsuario = async (req, res) => {
  try {
    const usuario = await TipoUsuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(usuario);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.crearTipoUsuario = async (req, res) => {
  const nuevo = new TipoUsuario(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.actualizarTipoUsuario = async (req, res) => {
  try {
    const actualizado = await TipoUsuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarTipoUsuario = async (req, res) => {
  try {
    const eliminado = await TipoUsuario.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "TipoUsuario eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};