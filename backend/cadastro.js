const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas 

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

//inicia o servidor
app.listen(port);
console.log('API funcionando!'); 


router.get("/usuarios",(req, res) => {
    execSQLQuery("SELECT * FROM usuarios", res)
});

router.get("/usuarios/:id?",(req, res) => {
    //let filter = " ";
    //if (req.params.id) filter="WHERE idusuarios=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM usuarios WHERE idusuarios=" + parseInt(req.params.id), res)
});

router.post("/usuarios", (req, res, err) => {
    console.log(err)
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const data_nascimento = req.body.data_nascimento;
    execSQLQuery(`INSERT INTO usuarios(nome, cpf, telefone, data_nascimento) VALUES('${nome}', '${cpf}', '${telefone}', '${data_nascimento}')`, res);
});

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ivolunteer'
});
connection.query(sqlQry, function(error, results, fields){
    if(error) 
      res.json(error);
    else
      res.json(results);
    connection.end();
    console.log('executou!');
});
}

