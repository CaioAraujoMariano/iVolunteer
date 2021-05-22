const mysql = require("mysql");

var pool = mysql.createPool({
    "user" : "root",
    "password:" : "root",
    "database" : 'ivolunteer',
    "host" : 'localhost',
    "port" : "3000"
});

exports.pool = pool;
