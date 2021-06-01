var express = require('express');
var router = express.Router();
const cookie_des = require('../BackUtils/readCookie');

router.get('/main', function(req, res, next) {
    res.render('main', { title: 'Main Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

router.get('/calender', function(req, res, next) {
    res.render('calender', { title: 'Calender Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

router.get('/faq', function(req, res, next) {
    res.render('faq', { title: 'FAQ Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

router.get('/black', function(req, res, next) {
    res.render('black', { title: 'Black Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

router.get('/sale', function(req, res, next) {
    res.render('sale', { title: 'Sale Page' ,cookie_val: cookie_des(req,res,'loginId')});
});

module.exports = router;
