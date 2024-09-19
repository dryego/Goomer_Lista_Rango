const produtoRepository = require("../../repository/produtoRepository");
const {
  cadastroProduto,
  buscaProduto,
} = require("../../service/produto/produtoService");

const produtoCadastro = async (req, res) => {
  const { restauranteID } = req.params;
  const { foto, nome, preco, categoria } = req.body;

  try {
    const novoProduto = await cadastroProduto(
      restauranteID,
      foto,
      nome,
      preco,
      categoria
    );

    if (novoProduto.sucesso === false) {
      return res.status(404).json({ mensagem: novoProduto.error });
    }

    return res.status(201).json(novoProduto.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

const buscaProdutosRestaurante = async (req, res) => {
  const { restauranteID } = req.params;
  try {
    const produto = await buscaProduto(restauranteID);
    if (produto.sucesso === false) {
      return res.status(404).json({ mensagem: produto.error });
    }

    return res.json(produto.data);
  } catch (error) {
    return res.status(500).json({ mensagem: "Erro interno: " + error });
  }
};

module.exports = { produtoCadastro, buscaProdutosRestaurante };
