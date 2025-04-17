const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
  //factura: { type: mongoose.Schema.Types.ObjectId, ref: 'Factura' },
  monto: Number,
  metodo: String,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pago', pagoSchema);