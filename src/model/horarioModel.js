const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/dbSequelize");

const Horario = sequelize.define("horario", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  diaSemana: {
    type: DataTypes.ENUM(
      "segunda",
      "terca",
      "quarta",
      "quinta",
      "sexta",
      "sabado",
      "domingo"
    ),
    allowNull: false,
  },
  horarioAbertura: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horarioFechamento: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = Horario;
