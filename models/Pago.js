const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
  monto: Number,
  metodo: String,
  status: String,
  fecha: { type: Date, default: Date.now },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Pago', pagoSchema);