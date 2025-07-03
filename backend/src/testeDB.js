const sequelize = require('./config/database');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso! 🐘');
  } catch (error) {
    console.error('Erro ao conectar ao banco:', error);
  }
})();