const mysql = require ('mysql');
const { SELECT } = require('sequelize/types/lib/query-types');
module.exports = {
    con: mysql.createConnection({
        host: 'cps17.webserver.pt',
        user: 'grupo1in_user',
        password: 'Maz3fr2bLsVXSYna',
        database: 'grupo1in_database'
    })

    

}
const connectL = require('./connect');
connectL.con.query('SELECT * from list_ucs', function (err, rows, fields) {
    if (!err) {
        numRows = rows.lenght;
    }
})