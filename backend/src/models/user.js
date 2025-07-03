const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: DataTypes.DATEONLY
  },
  peso: {
    type: DataTypes.FLOAT
  },
  altura: {
    type: DataTypes.FLOAT
  },
  papel: {
    type: DataTypes.STRING,
    defaultValue: 'usuario'
  }
}, {
  tableName: 'usuarios'
});

module.exports = User;
