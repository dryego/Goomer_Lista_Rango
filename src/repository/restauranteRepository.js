const { where } = require("sequelize");
const Endereco = require("../model/enderecoModel");
const Horario = require("../model/horarioModel");
const Restaurante = require("../model/restaurante/restauranteModel");

class RestauranteRepository {
  async criarRestaurante(restaurante) {
    return await Restaurante.create(restaurante);
  }

  async buscarRestauranteId(id) {
    return await Restaurante.findByPk(id, {
      includes: [{ model: Endereco }, { model: Horario }],
    });
  }

  async buscarRestauranteNome(nome) {
    return await Restaurante.findAll({
      where: {
        nome,
      },
    });
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

  async excluirRestaurante(IdRestaurante) {
    return await Restaurante.destroy({
      where: { id: IdRestaurante },
    });
  }

  async editarRestaurante(idRestaurante, dadosRestaurante) {
    return await Restaurante.update(dadosRestaurante, {
      where: { id: idRestaurante },
    });
  }
}

module.exports = new RestauranteRepository();
