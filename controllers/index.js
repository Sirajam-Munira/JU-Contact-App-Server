
var express = require('express'),
    router = express.Router();

router.use('/users', require('./users'));
router.use('/students', require('./students'));
router.use('/token', require('./token'));
router.use('/teachers', require('./teachers'));
router.use('/staffs', require('./staffs'));
router.use('/admins', require('./admins'));
router.use('/chairmans', require('./chairmans'));
router.use('/departments', require('./departments'));
router.use('/administrations', require('./administrations'));

router.get('/', function (req, res) {
    res.render('index', {title: 'Boilerplate'});
});

router.get('*', function (req, res) {
    res.status(404).render('error', {
        title: 'Boilerplate', error: {
            status: 404,
            stack: 'Not found'
        }
    });
});

module.exports = router;
