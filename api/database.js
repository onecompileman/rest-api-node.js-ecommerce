const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

console.log(con);

module.exports = con;