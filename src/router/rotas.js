const express = require("express");
const {
  restaurantes,
  buscarRestaurante,
} = require("../controller/restaurante/restauranteController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);
rotas.get("/buscaRestaurante/:id", buscarRestaurante);

module.exports = rotas;
