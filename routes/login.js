let express = require('express');
let router = express.Router();
//DB 통신
const getConnection = require('./../DB');
const cookie_des = require('../BackUtils/readCookie')

/* GET login page. */
router.get('/', function (req, res, next) {
    console.log(cookie_des(req,res,'loginId'))
    res.render('login', {title: 'Login Page', test1: 'aaa',cookie_val: cookie_des(req,res,'loginId')});
});

/* POST login page. */
router.post('/', function (req, res, next) {
    res.render('login', {title: 'Login Page', test1: 'aaa',cookie_val: cookie_des(req,res,'loginId')});
});

router.post('/check', function (req, res, next) {
    let email = req.body.id;
    let pwd = req.body.pw;

    getConnection((conn) => {
        conn.query('select * from user_login where email = "'+email+'"', function (error, results, fields) {
            if (error) {
                throw error;
            }
            console.log('겟 커넥션 성공');
            if (results.length > 0) {
                if (results[0].password == pwd) {
                    var ajax_results = {stat: 'true'};
                    res.cookie("loginId", email , {
                        expires: new Date(Date.now() + 20000000),
                        httpOnly: true,
                        signed: true
                    });
                    console.log('로그인 성공');
                } else {
                    var ajax_results = {stat: 'false'};
                    console.log('로그인 실패');
                }
                res.json(ajax_results);
            } else {
                var ajax_results = {stat: 'false'};
                console.log('로그인 실패');
                res.json(ajax_results);
            }
        });
        conn.release();
    });
});

router.get('/logOut', function (req, res, next) {
    res.clearCookie('loginId');
    console.log('로그아웃 성공');
    res.redirect("/login");
});

module.exports = router;
