const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbSequelize");
const Endereco = require("../enderecoModel");
const Horario = require("../horarioModel");

const Restaurante = sequelize.define("restaurante", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nome: {
    type: DataTypes.STRING(130),
    allowNull: false,
  },
});

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

module.exports = Restaurante;
