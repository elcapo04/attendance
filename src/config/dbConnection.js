const mysql = require('mysql')

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'perinola123',
        database: 'esencia'
       });
}