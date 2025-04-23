require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Rutas
app.use("/api/tipoUsuario", require("./routes/tipoUsuario"));
app.use("/api/usuario", require("./routes/usuarios"));
app.use("/api/facturas", require("./routes/facturas"));
app.use("/api/pagos", require("./routes/pago"));
app.use("/api/rutas", require("./routes/rutas"));

// Monitor RAM (solo para debug)
setInterval(() => {
  const used = process.memoryUsage().rss / 1024 / 1024;
  console.log(`🧠 Memoria usada: ${used.toFixed(2)} MB`);
}, 15000);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
