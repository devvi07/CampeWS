const mongoose = require('mongoose');

const catalogoArticuloSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  promocion: Number,
  descuento: Number,
  descontinuado: Number,
  imagen: String,
  tipoArticulo: { type: mongoose.Schema.Types.ObjectId, ref: 'TipoArticulo' }
});

module.exports = mongoose.model('CatalogoArticulo', catalogoArticuloSchema);