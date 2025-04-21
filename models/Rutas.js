const mongoose = require('mongoose');

const rutasSchema = new mongoose.Schema({
  nombre: String,
  municipio: String,
});

module.exports = mongoose.model('Rutas', rutasSchema);