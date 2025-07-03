const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'chave_secreta');
    req.user = decoded; // Armazena as infos do usuário no req.user
    next();
  } catch (err) {
    return res.status(401).json({ mensagem: 'Token inválido' });
  }
};

module.exports = authMiddleware;
