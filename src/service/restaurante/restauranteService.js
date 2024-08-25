const sequelize = require("../../config/dbSequelize");
const Restaurante = require("../../model/restaurante/restauranteModel");

const listaResturantes = async () => {
  try {
    const restaurantes = await Restaurante.findAll();
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
