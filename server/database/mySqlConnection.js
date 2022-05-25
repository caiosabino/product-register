const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'admin',
    database: 'PRODUCT_REGISTER_DB'
})

module.exports = db;
