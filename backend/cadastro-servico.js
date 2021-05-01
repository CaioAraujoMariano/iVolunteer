const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let servicos = [];

app.get('/servicos', (req, res, next) => {
  res.status(201).json(servicos);
});

app.post('/cadastro-servicos', (req, res, next) => {
  const servico = req.body;
  servicos.push({
    id: servico.id,
    nome: servico.nome,
    descricao: servico.descricao,
    dataLimite: servico.dataLimite,
    status: servico.status,
  });
  console.log(servicos);
  res.status(201).json(servicos);
});
