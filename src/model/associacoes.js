const Endereco = require("./enderecoModel");
const Horario = require("./horarioModel");
const Produto = require("./produto/produtoModel");
const Restaurante = require("./restaurante/restauranteModel");

const defineAssociacoes = () => {
  Restaurante.hasOne(Endereco, {
    foreignKey: {
      name: "restauranteID",
      allowNull: false,
    },
  });

  Restaurante.hasMany(Horario, {
    foreignKey: {
      name: "restauranteID",
      allowNull: false,
    },
  });

  Restaurante.hasMany(Produto, {
    foreignKey: {
      name: "restauranteID",
      allowNull: false,
    },
  });

  Endereco.belongsTo(Restaurante, {
    foreignKey: {
      name: "restauranteID",
      allowNull: false,
    },
  });

  Horario.belongsTo(Restaurante, {
    foreignKey: {
      name: "restauranteID",
      allowNull: false,
    },
  });

  Produto.belongsTo(Restaurante, {
    foreignKey: {
      name: "restauranteID",
      allowNull: false,
    },
  });
};

module.exports = defineAssociacoes;
