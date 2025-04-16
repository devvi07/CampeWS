require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

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