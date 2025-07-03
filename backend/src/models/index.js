const sequelize = require('../config/database');


const user = require('./user');
const treino = require('./treino');
const progresso = require('./progresso');


(async () => {
  try {
    await sequelize.sync({ force: false }); // force: false mantém dados existentes
    console.log('Modelos sincronizados com o banco de dados ✅');
  } catch (error) {
    console.error('Erro ao sincronizar modelos:', error);
  }
})();

module.exports = {
  sequelize,
  user,
  treino,
  progresso
};
