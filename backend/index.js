const execSQLQuery = require('./database.js');
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const port = 8000; //porta padrão
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//inicia o servidor
app.listen(port, function () {
});

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

// APIS de SERVICOS

router.get('/servicos', (req, res) => {
  execSQLQuery('SELECT * FROM servicos', res);
});

router.get('/servicos/:id?', (req, res) => {
  execSQLQuery(
    'SELECT * FROM servicos WHERE idservicos=' + parseInt(req.params.id),
    res,
  );
});

router.post('/servicos', (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const limite = req.body.limite;
  const status = req.body.status;
  const id_vulneravel = req.body.id_vulneravel;
  execSQLQuery(
    `INSERT INTO servicos(nome, descricao, limite, status, id_vulneravel) VALUES('${nome}', '${descricao}', '${limite}', '${status}', '${id_vulneravel}')`,
    res,
  );
});

// router.put('/servicos/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const status = req.body.status;
//   execSQLQuery(
//     `UPDATE servicos SET status="${status}" WHERE idservicos = "${id}"`,
//     res,
//   );
// });

// APIS DE USUARIOS

router.get('/usuarios', (req, res) => {
  execSQLQuery('SELECT * FROM usuarios', res);
});

router.get('/usuarios/:id?', (req, res) => {
  execSQLQuery(
    'SELECT * FROM usuarios WHERE idusuarios=' + parseInt(req.params.id),
    res,
  );
});

router.post('/usuarios', (req, res, err) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const telefone = req.body.telefone;
  const data_nascimento = req.body.data_nascimento;
  const senha = req.body.senha;
  const nivel_usuario = req.body.nivel_usuario;
  const endereco = req.body.endereco;
  execSQLQuery(
    `INSERT INTO usuarios(nome, cpf, telefone, data_nascimento, senha, nivel_usuario, endereco) VALUES('${nome}', '${cpf}', '${telefone}', '${data_nascimento}', '${senha}', '${nivel_usuario}', '${endereco}')`,
    res,
  );
});

// API DE LOGIN

router.post('/usuarios/login', (req, res, err) => {
  const { cpf, senha } = req.body;
  execSQLQuery(
    `SELECT * FROM usuarios WHERE cpf = '${cpf}' AND senha = '${senha}'`,
    res,
  );
});

// API DE SERVIÇOS POR USUARIO

router.post('/servicos/usuario', (req, res, err) => {
  const { id } = req.body;
  execSQLQuery(`SELECT * FROM servicos WHERE id_vulneravel = '${id}'`, res);
});

router.post('/servicos/voluntario', (req, res, err) => {
  const { id } = req.body;
  execSQLQuery(`SELECT * FROM servicos WHERE id_voluntario = '${id}'`, res);
});

// API DE ATUALIZAR STATUS DO SERVICOS

router.put('/servicos/:id?', (req, res, err) => {
  const { id_voluntario } = req.body;

  execSQLQuery(`UPDATE servicos SET id_voluntario = '${id_voluntario}' WHERE idservicos = '${req.params.id}'`, res);
})