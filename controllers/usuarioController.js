const Usuario = require("../models/Usuario");

exports.obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find().populate('tipoUsuario');;
  res.json(usuarios);
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(usuario);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.crearUsuario = async (req, res) => {
  const nuevo = new Usuario(req.body);
  await nuevo.save();
  res.status(201).json(nuevo);
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const actualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(actualizado);
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    const eliminado = await Usuario.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: "No encontrado" });
    res.json({ mensaje: "Usuario eliminado" });
  } catch {
    res.status(400).json({ error: "ID inválido" });
  }
};