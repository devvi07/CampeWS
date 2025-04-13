const mongoose = require('mongoose');

const tipoUsuarioSchema = new mongoose.Schema({
  tipo: Number,
  descripcion: String
});

module.exports = mongoose.model('TipoUsuario', tipoUsuarioSchema);