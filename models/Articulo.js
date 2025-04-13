const mongoose = require('mongoose');

const articuloSchema = new mongoose.Schema({
  factura: { type: mongoose.Schema.Types.ObjectId, ref: 'Factura' },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'CatalogoArticulo' },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  cantidad: Number,
});

module.exports = mongoose.model('Articulo', articuloSchema);