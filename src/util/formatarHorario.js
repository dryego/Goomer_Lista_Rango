const horarioRepository = require("../repository/horarioRepository");
const restauranteRepository = require("../repository/restauranteRepository");

const buscarRestauranteComHorarios = async (restauranteID) => {
  try {
    const restaurante = await restauranteRepository.buscarRestauranteId(
      restauranteID
    );

    if (!restaurante) {
      throw new Error(`Restaurante não encontrado.`);
    }

    const horarioRestaurante = await restauranteRepository.buscaHorarios(
      restauranteID
    );

    if (!horarioRestaurante || horarioRestaurante.horarios.length === 0) {
      return {
        sucesso: true,
        mensagem: "Este restaurante não possui horários cadastrados.",
      };
    }

    const horarioFiltrado = horarioRestaurante.horarios.map((horario) => ({
      diaSemana: horario.diaSemana,
      horarioAbertura: horario.horarioAbertura,
      horarioFechamento: horario.horarioFechamento,
    }));

    const diasSemana = [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ];

    const horariosFormatados = [];
    let intervaloAtual = {
      dias: [],
      horarioAbertura: "",
      horarioFechamento: "",
    };

    horarioFiltrado.forEach((horario, index) => {
      const diaAtual = horario.diaSemana;
      const proximoHorario = horarioFiltrado[index + 1];

      if (
        intervaloAtual.horarioAbertura === horario.horarioAbertura &&
        intervaloAtual.horarioFechamento === horario.horarioFechamento
      ) {
        intervaloAtual.dias.push(diaAtual);
      } else {
        if (intervaloAtual.dias.length > 0) {
          horariosFormatados.push({ ...intervaloAtual });
        }
        intervaloAtual = {
          dias: [diaAtual],
          horarioAbertura: horario.horarioAbertura,
          horarioFechamento: horario.horarioFechamento,
        };
      }

      if (
        !proximoHorario ||
        proximoHorario.horarioAbertura !== horario.horarioAbertura ||
        proximoHorario.horarioFechamento !== horario.horarioFechamento
      ) {
        horariosFormatados.push({ ...intervaloAtual });
        intervaloAtual = {
          dias: [],
          horarioAbertura: "",
          horarioFechamento: "",
        };
      }
    });

    const mensagemHorarios = horariosFormatados
      .map((intervalo) => {
        const dias =
          intervalo.dias.length > 1
            ? `${intervalo.dias[0]} à ${
                intervalo.dias[intervalo.dias.length - 1]
              }`
            : intervalo.dias[0];
        return `${dias} das ${intervalo.horarioAbertura} às ${intervalo.horarioFechamento}`;
      })
      .join(" e ");

    return {
      sucesso: true,
      mensagem: `Horários de funcionamento do restaurante: ${mensagemHorarios}.`,
    };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = { buscarRestauranteComHorarios };
