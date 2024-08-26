const { criarEndereco } = require("../../repository/enderecoRepository");
const {
  listaResturantes,
  buscarRestauranteID,
  criarRestaurante,
} = require("../../service/restaurante/restauranteService");

const restaurantes = async (req, res) => {
  try {
    const restaurantes = await listaResturantes();
    if (restaurantes.sucesso === false) {
      return res.status(404).json({ mensagem: restaurantes.error });
    }
    return res.json(restaurantes.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

const buscarRestaurante = async (req, res) => {
  const { id } = req.params;

  try {
    const restaurante = await buscarRestauranteID(id);
    if (restaurante.sucesso === false) {
      return res.status(404).json({ mensagem: restaurante.error });
    }
    return res.json(restaurante.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

const cadastraRestaurante = async (req, res) => {
  const { foto, nome, logradouro, numero, bairro, estado, cep, referencia } =
    req.body;
  console.log(req.body);

  try {
    const novoRestaurante = await criarRestaurante(
      foto,
      nome,
      logradouro,
      numero,
      bairro,
      estado,
      cep,
      referencia
    );

    if (novoRestaurante.sucesso === false) {
      return res.status(404).json({ mensagem: novoRestaurante.error });
    }

    return res.json(novoRestaurante.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

module.exports = {
  restaurantes,
  buscarRestaurante,
  cadastraRestaurante,
};
