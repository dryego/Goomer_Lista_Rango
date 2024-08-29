const Horario = require("../model/horarioModel");
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

  async buscaHorarios(IdRestaurante) {
    return await Restaurante.findOne({
      where: { id: IdRestaurante },
      attributes: [],
      include: [
        {
          model: Horario,
          attributes: ["diaSemana", "horarioAbertura", "horarioFechamento"],
        },
      ],
    });
  }
}

module.exports = new RestauranteRepository();
