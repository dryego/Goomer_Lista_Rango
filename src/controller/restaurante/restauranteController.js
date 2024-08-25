const {
  listaResturantes,
  buscarRestauranteID,
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

module.exports = {
  restaurantes,
  buscarRestaurante,
};
