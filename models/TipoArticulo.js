const mongoose = require('mongoose');

const tipoArticuloSchema = new mongoose.Schema({
  tipo: Number,
  descripcion: String
});

module.exports = mongoose.model('TipoArticulo', tipoArticuloSchema);