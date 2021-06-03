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


router.get("/servicos",(req, res) => {
    execSQLQuery("SELECT * FROM servicos", res)
});

router.get("/servicos/:id?",(req, res) => {
    //let filter = " ";
    //if (req.params.id) filter="WHERE idservicos=" + parseInt(req.params.id);
    execSQLQuery("SELECT * FROM servicos WHERE idservicos=" + parseInt(req.params.id), res)
});

router.post("/servicos", (req, res) => {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const limite = req.body.limite;
    const status = req.body.status;
    execSQLQuery(`INSERT INTO servicos(nome, descricao, limite, status) VALUES('${nome}', '${descricao}', '${limite}', '${status}')`, res);
});

router.put("/servicos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const status = req.body.status;
    execSQLQuery(`UPDATE servicos SET status="${status}" WHERE idservicos = "${id}"`, res);
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

