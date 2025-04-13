const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  total: Number,
}, { timestamps: true });

module.exports = mongoose.model('Factura', facturaSchema);