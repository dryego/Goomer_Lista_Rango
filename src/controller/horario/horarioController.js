const { criarHorarios } = require("../../service/horario/cadastroHorarios");

const cadastraHorarios = async (req, res) => {
  const { restauranteID } = req.params;
  const { horarios } = req.body;

  try {
    const horariosCadastrados = await criarHorarios(restauranteID, horarios);

    if (horariosCadastrados.sucesso === false) {
      return res.status(400).json({ menssagen: horariosCadastrados.error });
    }

    return res.status(201).json(horariosCadastrados.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

module.exports = { cadastraHorarios };
