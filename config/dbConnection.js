var mysql = require('mysql');

var conectMySQL = function () {    
    
    var connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'sistema_produto'
        }
    );

    return connection;
}

module.exports = function() {
    return conectMySQL;
}