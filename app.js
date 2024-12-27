const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Rota básica
app.get('/', (req, res) => {
  res.send('Bem-vindo à API Lacrei Saúde!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
