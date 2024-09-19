const { DataTypes } = require("sequelize");
const sequelize = require("../../config/dbSequelize");

const Produto = sequelize.define("produto", {
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
  preco: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.ENUM("bebida", "entrada", "aperitivo", "prato", "lanche"),
    allowNull: false,
  },
});

module.exports = Produto;
