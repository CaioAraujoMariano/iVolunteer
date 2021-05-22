const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ivolunteer',
});

connection.connect((err) => {
  if (err) {
    console.log('Erro na conexão com o Banco de Dados: ', err);
    return;
  }
  console.log('Conexão bem sucedida!');
});

connection.query('SELECT * FROM usuarios', (err, rows) => {
  if (err) throw err;

  console.log('Usuarios: ', rows, '\n\n');
});

connection.end((err) => {
  if (err) {
    console.log('Erro ao encerrando a conexão com o BD: ', err);
    return;
  }
  console.log('Conexao encerrada!');
});
