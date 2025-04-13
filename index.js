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
const rutasArticulo = require("./routes/tipoArticulo");
const rutasUsuarios = require("./routes/usuarios");
const rutasFacturas = require("./routes/facturas");
const rutasPagos = require("./routes/pago");
const rutasCatArticulos = require("./routes/catArticulos");
const rutasArticulos = require("./routes/articulos");

app.use("/api/tipoUsuario", rutasTipoUsuario);
app.use("/api/tipoArticulo", rutasArticulo);
app.use("/api/usuario", rutasUsuarios);
app.use("/api/facturas", rutasFacturas);
app.use("/api/pagos", rutasPagos);
app.use("/api/catArticulos", rutasCatArticulos);
app.use("/api/articulos", rutasArticulos);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});