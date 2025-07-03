
const express = require('express');
const router = express.Router();
const treinoController = require('../controllers/treinoController');

router.post('/treinos', treinoController.criarTreino);
router.get('/treinos', treinoController.listarTreinos);
router.delete('/treinos/:id', treinoController.deletarTreino);
router.put('/treinos/:id', treinoController.atualizarTreino);

module.exports = router;
