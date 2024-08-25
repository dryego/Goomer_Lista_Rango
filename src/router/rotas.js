const express = require("express");
const {
  restaurantes,
} = require("../controller/restaurante/restauranteController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);

module.exports = rotas;
