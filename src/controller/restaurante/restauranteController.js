const { criarEndereco } = require("../../repository/enderecoRepository");
const {
  listaResturantes,
  buscarRestauranteID,
  criarRestaurante,
  deletarRestaurante,
  restauranteEditado,
} = require("../../service/restaurante/restauranteService");
const { buscarRestauranteComHorarios } = require("../../util/formatarHorario");

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

const buscaHorarioRestaurante = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurante = await buscarRestauranteComHorarios(id);
    if (restaurante.sucesso === false) {
      return res.status(404).json({ mensagem: restaurante.error });
    }

    return res.json(restaurante);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

const deletaRestauranteID = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurante = await deletarRestaurante(id);

    if (restaurante.sucesso === false) {
      return res.status(404).json({ mensagem: restaurante.error });
    }
    return res.json({ mensagen: restaurante.mensagem });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

const editarRestaurante = async (req, res) => {
  const { id } = req.params;
  const { foto, nome, logradouro, numero, bairro, estado, cep, referencia } =
    req.body;
  try {
    const restaurante = await restauranteEditado(
      id,
      foto,
      nome,
      logradouro,
      numero,
      bairro,
      estado,
      cep,
      referencia
    );
    if (restaurante.sucesso === false) {
      return res.status(404).json({ mensagem: restaurante.error });
    }

    return res.json({ mensagen: restaurante.mensagem });
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

module.exports = {
  restaurantes,
  buscarRestaurante,
  cadastraRestaurante,
  buscaHorarioRestaurante,
  deletaRestauranteID,
  editarRestaurante
};
