var express = require('express');
var router = express.Router();
let cookie_des;
cookie_des = require('../BackUtils/readCookie');

router.get('/main', function(req, res, next) {
    res.render('main', { title: 'Main Page'});
});

router.get('/calender', function(req, res, next) {
    res.render('calender', { title: 'Calender Page'});
});

router.get('/faq', function(req, res, next) {
    res.render('faq', { title: 'FAQ Page'});
});

router.get('/black', function(req, res, next) {
    res.render('black', { title: 'Black Page'});
});

module.exports = router;
