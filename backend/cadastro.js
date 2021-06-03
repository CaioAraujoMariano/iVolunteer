const http = require('http');
const express = require('express');
const app = express();
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
const bodyParser = require ('body-parser');
app.use (bodyParser.json());

let usuarios = [];

app.get('/usuarios', (req, res, next) => {
    res.status(201).json(usuarios);
})

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
        cep: usuario.cep
    })
    console.log(usuarios);
  res.status(201).json(usuarios);
})


// app.post('/cadastro', (req, res, next) => {
//     const usuario = {
//         id: req.body.cpf,
//         nivelUsuario: req.body.nivelUsuario,
//         nome: req.body.nome,
//         dataDeNascimento: req.body.dataDeNascimento,
//         telefone: req.body.telefone,
//         estado: req.body.estado,
//         cidade: req.body.cidade,
//         bairro: req.body.bairro,
//         rua: req.body.rua,
//         complemento: req.body.complemento,
//         cep: req.body.cep
//     }
//     console.log(req.body);
//     usuarios.push({usuario});
//     res.status(200).json(usuario);
// })