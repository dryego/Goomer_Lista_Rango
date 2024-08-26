const Horario = require("../model/horarioModel");

class HorarioRepository {
  async criarHorarios(horarios) {
    return await Horario.bulkCreate(horarios);
  }

  async buscarHorariosIdRestaurante(restauranteID) {
    return await Horario.findByPk(restauranteID);
  }
}

module.exports = new HorarioRepository();
