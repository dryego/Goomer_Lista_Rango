const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbSequelize");
const Restaurante = require("./restaurante/restauranteModel");

const Endereco = sequelize.define("endereco", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  logradouro: {
    type: DataTypes.STRING(130),
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING(130),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: false,
    validate: {
      is: /^[0-9]{8}-[0-9]$/,
    },
  },
  referencia: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});

module.exports = Endereco;
