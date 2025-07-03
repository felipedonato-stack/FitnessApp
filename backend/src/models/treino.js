const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const treino = sequelize.define('treino', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING
  },
  duracao: {
    type: DataTypes.INTEGER
  },
  nivel: {
    type: DataTypes.STRING
  },
  descricao: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'treinos'
});

module.exports = treino;
