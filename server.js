const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Rota padrão para servir index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});