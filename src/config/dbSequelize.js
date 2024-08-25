const { Sequelize } = require("sequelize");
const { dbSequelize } = require("./variaveisAmbiente");

const sequelize = new Sequelize(
  dbSequelize.database,
  dbSequelize.user,
  dbSequelize.password,
  { dialect: "postgres", host: dbSequelize.host }
);

module.exports = sequelize;
