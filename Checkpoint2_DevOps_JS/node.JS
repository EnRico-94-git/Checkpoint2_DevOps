const express = require('express');
const app = express();
const port = 880;


app.get('/', (req, res) => {
  res.send('<h1>Implatação efetuada com sucesso</h1>');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
