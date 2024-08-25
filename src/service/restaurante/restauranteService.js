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

    if (restaurante === null) {
      throw new Error("Restaurante não encontrado.");
    }

    return { sucesso: true, data: restaurante };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = {
  listaResturantes,
  buscarRestauranteID,
};
