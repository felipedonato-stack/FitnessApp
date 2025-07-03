
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
const treinoRoutes = require('./routes/treinoRoutes');

app.use('/api', userRoutes);
app.use('/api', treinoRoutes);

app.get('/', (req, res) => {
  res.send('Servidor rodando com sucesso! 🚀');
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor ativo em: http://localhost:${PORT}`);
});
