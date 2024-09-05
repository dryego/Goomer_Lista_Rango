const express = require("express");
const {
  restaurantes,
  buscarRestaurante,
  cadastraRestaurante,
  buscaHorarioRestaurante,
  deletaRestauranteID,
  editarRestaurante,
} = require("../controller/restaurante/restauranteController");
const { cadastraHorarios } = require("../controller/horario/horarioController");

const rotas = express.Router();
// rotas restaurante
rotas.get("/listaRestaurantes", restaurantes);
rotas.get("/buscaRestaurante/:id", buscarRestaurante);
rotas.post("/cadastroRestaurante", cadastraRestaurante);
rotas.put("/editarRestaurante/:id", editarRestaurante);
rotas.delete("/excluirRestaurante/:id", deletaRestauranteID);

//rotas horario
rotas.get("/horarios/:id", buscaHorarioRestaurante);
rotas.post("/cadastroHorarios/:restauranteID", cadastraHorarios);

module.exports = rotas;
