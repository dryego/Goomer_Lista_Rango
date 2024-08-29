const enderecoRepository = require("../../repository/enderecoRepository");
const restauranteRepository = require("../../repository/restauranteRepository");
const {
  buscarRestaurantes,
  buscarRestauranteId,
} = require("../../repository/restauranteRepository");

const listaResturantes = async () => {
  try {
    const restaurantes = await buscarRestaurantes();

    if (restaurantes.length === 0) {
      throw new Error("Não à restaurantes cadastrados.");
    }
    return { sucesso: true, data: restaurantes };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

const buscarRestauranteID = async (id) => {
  try {
    const restaurante = await buscarRestauranteId(id);
    const endereco = await enderecoRepository.buscarEnderecoIdRestaurante(id);
    const horarios = await restauranteRepository.buscaHorarios(id);

    if (restaurante === null) {
      throw new Error("Restaurante não encontrado.");
    }

    return { sucesso: true, data: { restaurante, endereco, horarios } };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

const criarRestaurante = async (
  foto,
  nome,
  logradouro,
  numero,
  bairro,
  estado,
  cep,
  referencia
) => {
  try {
    const novoRestaurante = {
      foto,
      nome,
    };

    const restaurante = await restauranteRepository.criarRestaurante(
      novoRestaurante
    );

    if (!restaurante) {
      throw new Error("Erro ao criar restaurante.");
    }
    const novoEndereco = {
      restauranteID: restaurante.id,
      logradouro,
      numero,
      bairro,
      estado,
      cep,
      referencia,
    };

    const endereco = await enderecoRepository.criarEndereco(novoEndereco);

    if (!endereco) {
      throw new Error("Erro ao criar endereço.");
    }

    return { sucesso: true, data: { restaurante, endereco } };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = {
  listaResturantes,
  buscarRestauranteID,
  criarRestaurante,
};
