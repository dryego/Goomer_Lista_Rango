const express = require("express");
const { porta } = require("./config/variaveisAmbiente");
const rotas = require("./router/rotas");

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(porta, console.log(`Servidor Inicializado na porta: ${porta}`));
