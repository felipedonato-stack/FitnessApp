const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const progressoController = require('../controllers/progressoController');

// Rota protegida para registrar progresso
router.post('/progresso', auth, progressoController.registrarProgresso);

// Rota protegida para listar progresso do usuário logado
router.get('/progresso', auth, progressoController.listarProgresso);

module.exports = router;
