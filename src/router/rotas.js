const express = require("express");
const {
  restaurantes,
  buscarRestaurante,
  cadastraRestaurante,
} = require("../controller/restaurante/restauranteController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);
rotas.get("/buscaRestaurante/:id", buscarRestaurante);
rotas.post("/cadastroRestaurante", cadastraRestaurante);

module.exports = rotas;
