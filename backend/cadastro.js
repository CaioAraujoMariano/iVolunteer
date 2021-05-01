const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let usuarios = [];

app.get('/usuarios', (req, res, next) => {
  res.status(201).json(usuarios);
});

app.post('/cadastro', (req, res, next) => {
  const usuario = req.body;
  usuarios.push({
    id: usuario.id,
    nivelUsuario: usuario.nivelUsuario,
    nome: usuario.nome,
    dataDeNascimento: usuario.dataDeNascimento,
    telefone: usuario.telefone,
    estado: usuario.estado,
    cidade: usuario.cidade,
    bairro: usuario.bairro,
    rua: usuario.rua,
    complemento: usuario.complemento,
    cep: usuario.cep,
  });
  console.log(usuarios);
  res.status(201).json(usuarios);
});
