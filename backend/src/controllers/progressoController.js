const { progresso } = require('../models');

// Cadastrar progresso (apenas para usuário autenticado)
const registrarProgresso = async (req, res) => {
  try {
    const { peso, gordura_corporal, observacoes } = req.body;

    const novoProgresso = await progresso.create({
      peso,
      gordura_corporal,
      observacoes,
      userId: req.user.id
    });

    res.status(201).json(novoProgresso);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Listar progresso do usuário logado
const listarProgresso = async (req, res) => {
  try {
    const dados = await progresso.findAll({
      where: { userId: req.user.id }
    });

    res.json(dados);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  registrarProgresso,
  listarProgresso
};
