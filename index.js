require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());
// Aumenta el límite de tamaño para JSON
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const rutasTipoUsuario = require("./routes/tipoUsuario");
const rutasUsuarios = require("./routes/usuarios");
const rutasFacturas = require("./routes/facturas");
const rutasPagos = require("./routes/pago");

app.use("/api/tipoUsuario", rutasTipoUsuario);
app.use("/api/usuario", rutasUsuarios);
app.use("/api/facturas", rutasFacturas);
app.use("/api/pagos", rutasPagos);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});