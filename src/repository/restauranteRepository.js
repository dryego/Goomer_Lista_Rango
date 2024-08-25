const Restaurante = require("../model/restaurante/restauranteModel");

class RestauranteRepository {
  async criarRestaurante(restaurante) {
    return await Restaurante.create(restaurante);
  }

  async buscarRestauranteId(id) {
    return await Restaurante.findByPk(id);
  }

  async buscarRestaurantes() {
    return await Restaurante.findAll();
  }
}

module.exports = new RestauranteRepository();
