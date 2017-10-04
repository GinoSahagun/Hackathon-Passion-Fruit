var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});
/* GET dashboard page. */
router.get('/career', function (req, res) {
    res.render('career', { title: 'Express' });
});
/* GET dashboard page. */
router.get('/dashboard', function (req, res) {
    res.render('dashboard', { title: 'Express' });
});
/* GET company page. */
router.get('/company-all', function (req, res) {
    res.render('company-all', { title: 'About Savour and Sip' });
});
/* GET company page. */
router.get('/company', function (req, res) {
    res.render('company', { title: 'About Savour and Sip' });
});
/* GET my company pages page. */
router.get('/my-companies', function (req, res) {
    res.render('comp', { title: 'About Savour and Sip' });
});
/* GET intro page. */
router.get('/intro', function (req, res) {
    res.render('intro', { title: 'About Savour and Sip' });
});
/* GET login page. */
router.get('/login', function (req, res) {
    res.render('login', { title: 'About Savour and Sip' });
});
module.exports = router;