const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbSequelize");

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

module.exports = Restaurante;
