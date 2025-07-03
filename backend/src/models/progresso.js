const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const progresso = sequelize.define('progresso', {
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  gordura_corporal: {
    type: DataTypes.FLOAT
  },
  data: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  },
  observacoes: {
    type: DataTypes.TEXT
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'progresso'
});

module.exports = progresso;
