var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'marketing'
});

connection.connect((err,connected)=> {
    err ? console.log("error while connecting"+err) : console.log("succesfully connected to db");
});

module.exports = connection