const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // habilita CORS
app.use(express.json()); // parsea JSON

// 🔗 Conexión a MongoDB Atlas 
const mongoURI = "mongodb+srv://Campe:Campe2025@campe.1gfbkzs.mongodb.net/?retryWrites=true&w=majority&appName=Campe";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado a MongoDB Atlas"))
.catch(err => console.error("❌ Error conectando a MongoDB:", err));

// 🎯 Modelo de ejemplo
const SaludoSchema = new mongoose.Schema({ mensaje: String });
const Saludo = mongoose.model("Saludo", SaludoSchema);

// 📡 Rutas
app.get("/api/saludo", async (req, res) => {
  const saludos = await Saludo.find();
  res.json(saludos);
});

app.post("/api/saludo", async (req, res) => {
  const nuevo = new Saludo({ mensaje: req.body.mensaje });
  await nuevo.save();
  res.status(201).json(nuevo);
});

// 🚀 Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
 
