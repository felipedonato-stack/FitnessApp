const { user } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await user.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: 'Email já cadastrado' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = await user.create({
      nome,
      email,
      senha: senhaCriptografada
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await user.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ mensagem: 'Usuário não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ mensagem: 'Senha inválida' });
    }

    const token = jwt.sign({ id: usuario.id }, 'chave_secreta', { expiresIn: '2h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const listarUsuarios = async (req, res) => {
  const usuarios = await user.findAll();
  res.json(usuarios);
};

module.exports = {
  register,
  login,
  listarUsuarios
};
