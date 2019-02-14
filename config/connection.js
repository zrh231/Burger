var mysql = require('mysql');

var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'always231',
    database: ''
});

module.exports = con;