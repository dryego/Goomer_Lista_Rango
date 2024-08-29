const express = require("express");
const {
  restaurantes,
  buscarRestaurante,
  cadastraRestaurante,
  buscaRestauranteHorario,
  buscaRestauranComteHorario,
  buscaHorarioRestaurante,
} = require("../controller/restaurante/restauranteController");
const { cadastraHorarios } = require("../controller/horario/horarioController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);
rotas.get("/buscaRestaurante/:id", buscarRestaurante);
rotas.post("/cadastroRestaurante", cadastraRestaurante);

//rotas horario
rotas.get("/horarios/:id",buscaHorarioRestaurante);
rotas.post("/cadastroHorarios/:restauranteID", cadastraHorarios);

module.exports = rotas;
