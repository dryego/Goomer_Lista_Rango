const Produto = require("../model/produto/produtoModel");

class ProdutoRepository {
  async criarProduto(produto) {
    return await Produto.create(produto);
  }

  async buscaProdutosIdRestaurante(restauranteID) {
    return await Produto.findAll({
      where: { restauranteID },
    });
  }
}

module.exports = new ProdutoRepository();
