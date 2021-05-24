var express = require('express');
var router = express.Router();
//DB 통신
const getConnection = require('./../DB');

/* GET test page. */
router.get('/DB-test', function (req, res, next) {
    getConnection((conn) => {
        conn.query('SELECT * FROM user_login', function (error, results, fields) {
            res.render('test/DB-test', {title: 'Express', user_test: results});
        });
        conn.release();
    });
});


module.exports = router;
