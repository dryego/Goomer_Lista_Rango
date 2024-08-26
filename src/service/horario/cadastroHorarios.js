const horarioRepository = require("../../repository/horarioRepository");
const restauranteRepository = require("../../repository/restauranteRepository");

const criarHorarios = async (restauranteID, horarios) => {
  try {
    const restauranteExiste = await restauranteRepository.buscarRestauranteId(
      restauranteID
    );
    if (!restauranteExiste) {
      throw new Error(`Restaurante não encontrado.`);
    }

    const horariosCriados = await horarioRepository.criarHorarios(
      horarios.map((horario) => ({
        restauranteID,
        diaSemana: horario.diaSemana,
        horarioAbertura: horario.horarioAbertura,
        horarioFechamento: horario.horarioFechamento,
      }))
    );

    if (!horariosCriados) {
      throw new Error("Problema ao criar horarios.");
    }

    return { sucesso: true, data: horariosCriados };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = { criarHorarios };
