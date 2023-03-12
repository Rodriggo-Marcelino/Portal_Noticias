var mysql = require('mysql');

var connMySQL = function(){
    // conexão com o banco de dados
    // erro / ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; 
    console.log('conexão com o banco de dados foi estabelecida')
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });
}

module.exports = function() {
    console.log('o autoload carregou o modulo de conexão com o bd')
    return connMySQL;
}
