const express = require("express");
const { porta, dbSequelize } = require("./config/variaveisAmbiente");
const rotas = require("./router/rotas");
const sequelize = require("./config/dbSequelize");
const defineAssociacoes = require("./model/associacoes");

const app = express();

app.use(express.json());
app.use(rotas);

defineAssociacoes();

sequelize
  .sync({ force: false })
  .then(() => console.log("Banco de dados conectado e sincronizado"));

app.listen(porta, console.log(`Servidor Inicializado na porta: ${porta}`));
