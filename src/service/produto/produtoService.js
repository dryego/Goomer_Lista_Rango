const produtoRepository = require("../../repository/produtoRepository");
const restauranteRepository = require("../../repository/restauranteRepository");

const cadastroProduto = async (restauranteID, foto, nome, preco, categoria) => {
  try {
    const restaurante = await restauranteRepository.buscarRestauranteId(
      restauranteID
    );

    if (!restaurante) {
      throw new Error("Restaurante nao encontrado.");
    }
    const novoProduto = {
      restauranteID,
      foto,
      nome,
      preco,
      categoria,
    };
    console.log(novoProduto);

    const produto = await produtoRepository.criarProduto(novoProduto);
    if (!produto) {
      throw new Error("Erro ao cadastra produto.");
    }
    console.log(produto);

    return { sucesso: true, data: produto };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

const buscaProduto = async (restauranteID) => {
  try {
    const restaurante = await restauranteRepository.buscarRestauranteId(
      restauranteID
    );

    if (!restaurante) {
      throw new Error("Restaurante não encontrado.");
    }

    const produto = await produtoRepository.buscaProdutosIdRestaurante(
      restauranteID
    );

    if (!produto) {
      throw new Error("Produto não encontrado.");
    }

    return { sucesso: true, data: produto };
  } catch (error) {
    return { sucesso: false, error: error.message };
  }
};

module.exports = {
  cadastroProduto,
  buscaProduto,
};
