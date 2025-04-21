const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: String,
  apellidoP: String,
  apellidoM: String,
  direccion: String,
  municipio: String,
  tel: String,
  password: String,
  latitud: Number,
  longitud: Number,
  dia: String,
  foto:String,
  tipoUsuario: { type: Schema.Types.ObjectId, ref: 'TipoUsuario' },
  facturas: [{ type: Schema.Types.ObjectId, ref: 'Factura' }]
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);