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

    if (horarios.length >= 8) {
      throw new Error("Não é permitido cadastrar mais de 8 horários.");
    }

    const horariosExistente = await restauranteRepository.buscaHorarios(
      restauranteID
    );
    const limiteHorairos = horariosExistente.dataValues.horarios.length;

    if (limiteHorairos === 7) {
      throw new Error("Limite de horarios exedido.");
    }

    horarios.forEach((horario) => {
      const abertura = new Date(`2024-01-01T${horario.horarioAbertura}:00Z`);
      const fechamento = new Date(
        `2024-01-01T${horario.horarioFechamento}:00Z`
      );

      const diffInMinutes = (fechamento - abertura) / 60000;

      if (diffInMinutes < 15) {
        throw new Error(
          `O intervalo entre abertura e fechamento deve ser de no mínimo 15 minutos na ${horario.diaSemana}`
        );
      }
    });

    const horariosCriados = await horarioRepository.criarHorarios(
      horarios.map((horario) => ({
        restauranteID,
        diaSemana: horario.diaSemana,
        horarioAbertura: horario.horarioAbertura,
        horarioFechamento: horario.horarioFechamento,
      }))
    );

    if (!horariosCriados) {
      throw new Error("Problema ao criar horários.");
    }

    return { sucesso: true, data: horariosCriados };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = { criarHorarios };
