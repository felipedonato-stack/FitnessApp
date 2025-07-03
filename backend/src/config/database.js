const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fitnessapp', 'postgres', 'Pipepaez1@', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false
});

module.exports = sequelize;
