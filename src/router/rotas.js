const express = require("express");
const {
  restaurantes,
} = require("../controller/restaurante/restauranteController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);
rotas.get("/buscaRestaurante/{id}")

module.exports = rotas;
