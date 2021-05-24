const mysql = require('mysql');
const config = require('./database-config');

//DB 풀링
let pool = mysql.createPool(config);

function getConnection(callback) {
    pool.getConnection(function (err, conn) {
        if(!err) {
            callback(conn);
        }
    });
}

module.exports = getConnection;