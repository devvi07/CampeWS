const bcrypt = require('bcrypt');
const Usuario = require("../models/Usuario");

exports.obtenerClientes = async (req, res) => {
  try {
    const usuario = await Usuario.find({ tipoUsuario: req.params.id }).select('nombre apellidoP apellidoM direccion municipio facturas');
    if (!usuario) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(usuario);
  } catch {
    res.status(400).json({ error: "ID inválido getClientes" });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const { municipio, tipoUsuario } = req.query;

    const filtro = {};

    if (municipio) filtro.municipio = municipio;
    if (tipoUsuario) filtro.tipoUsuario = tipoUsuario;

    const usuarios = await Usuario.find(filtro)
      .populate('tipoUsuario')
      .populate({
        path: 'facturas',
        populate: { path: 'pagos' }
      });

    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
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

exports.login = async (req, res) => {
  const { nombre, password } = req.body;

  //const usuario = await Usuario.findOne({ nombre: nombre });
  const usuario = await Usuario.findOne({ nombre: nombre }).populate('tipoUsuario');

  if (!usuario) {
    return res.status(401).json({ mensaje: '¡Usuario inexistente!' });
  }

  const pass = password === usuario.password;

  if (!pass) {
    return res.status(401).json({ mensaje: '¡Contraseña incorrecta!' });
  }

  res.json({ mensaje: 'Login exitoso', usuario });
};