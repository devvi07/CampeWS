const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  pagos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pago' }],
  articulo: String,
  cantidad: Number,
  total: Number,
  abono: Number,
  resta: Number,
  status:String,
}, { timestamps: true });

module.exports = mongoose.model('Factura', facturaSchema);