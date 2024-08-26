const express = require("express");
const {
  restaurantes,
  buscarRestaurante,
  cadastraRestaurante,
} = require("../controller/restaurante/restauranteController");
const { cadastraHorarios } = require("../controller/horario/horarioController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);
rotas.get("/buscaRestaurante/:id", buscarRestaurante);
rotas.post("/cadastroRestaurante", cadastraRestaurante);

//rotas horario
rotas.post("cadastroHorarios/:restauranteID", cadastraHorarios);

module.exports = rotas;
