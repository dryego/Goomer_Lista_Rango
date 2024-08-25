const {
  buscarRestaurantes,
} = require("../../repository/restauranteRepository");

const listaResturantes = async () => {
  try {
    const restaurantes = await buscarRestaurantes();
    console.log(restaurantes);

    if (restaurantes.length === 0) {
      throw new Error("Não à restaurantes cadastrados.");
    }
    return { sucesso: true, data: restaurantes };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = {
  listaResturantes,
};
