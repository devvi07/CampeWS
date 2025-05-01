const mongoose = require('mongoose');

const rutasSchema = new mongoose.Schema({
  nombre: String,
  dia: String,
});

module.exports = mongoose.model('Rutas', rutasSchema);