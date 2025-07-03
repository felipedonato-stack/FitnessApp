
const { treino } = require('../models');

// Criar novo treino
const criarTreino = async (req, res) => {
  try {
    console.log('📦 Conteúdo recebido no body:', req.body);
    const novoTreino = await treino.create(req.body);
    res.status(201).json(novoTreino);
  } catch (error) {
    console.error('❌ Erro ao criar treino:', error);
    res.status(500).json({ erro: error.message });
  }
};

// Listar todos os treinos
const listarTreinos = async (req, res) => {
  try {
    const treinos = await treino.findAll();
    res.json(treinos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Deletar treino por ID
const deletarTreino = async (req, res) => {
  try {
    const { id } = req.params;
    await treino.destroy({ where: { id } });
    res.json({ mensagem: 'Treino removido com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Atualizar treino por ID
const atualizarTreino = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, data, usuarioId } = req.body;

    const treinoExistente = await treino.findByPk(id);
    if (!treinoExistente) {
      return res.status(404).json({ mensagem: 'Treino não encontrado.' });
    }

    await treino.update({ nome, descricao, data, usuarioId }, { where: { id } });

    res.status(200).json({ mensagem: 'Treino atualizado com sucesso!' });
  } catch (erro) {
    console.error('Erro ao atualizar treino:', erro);
    res.status(500).json({ erro: 'Erro ao atualizar treino.' });
  }
};

module.exports = {
  criarTreino,
  listarTreinos,
  deletarTreino,
  atualizarTreino,
};
