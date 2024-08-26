const Endereco = require("../model/enderecoModel");

class EnderecoRepository {
  async criarEndereco(endereco) {
    return await Endereco.create(endereco);
  }

  async buscarEnderecoIdRestaurante(restauranteID) {
    return await Endereco.findByPk(restauranteID);
  }
}

module.exports = new EnderecoRepository();
