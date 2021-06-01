var express = require('express');
var router = express.Router();
//DB 통신
const getConnection = require('./../DB');
const cookie_des = require('../BackUtils/readCookie')

/* GET join page. */
router.get('/', function(req, res, next) {
    res.render('join', { title: 'Join Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

/* POST join page. */
router.post('/', function(req, res, next) {
    res.render('join', { title: 'Join Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

router.post('/signup', function(req, res, next) {
    console.log("회원가입 시작");
    let nickname = req.body.nickname;
    let email = req.body.email;
    let age = req.body.age;
    let pwd = req.body.pw;

    console.log(name, email, age, pwd);
    console.log("회원가입 시작2");
    getConnection((conn) => {
        console.log("회원가입 시작3");
        conn.query('INSERT INTO i_user(Nickname, User_Email, User_Password, Age) values("'+nickname+'", "'+email+'", "'+pwd+'", '+age+')', function (error, results, fields) {
            console.log("회원가입 시작4");
            if (error) {
                res.json({stat: 'false'});
                console.log("error ocurred", error);
                console.log("에러 발생");
                process.on('uncaughtException', function (err) {
                    console.log('Caught exception: ' + err);
                });

                setTimeout(function () {
                    console.log('홀리쉿 서버다운될 뻔');
                    res.redirect("/error");
                }, 500);
            } else {
                res.json({stat: 'true'});
                console.log('The solution is: ', results);
                console.log("회원가입 성공");
            }
        });
    });
});

module.exports = router;
