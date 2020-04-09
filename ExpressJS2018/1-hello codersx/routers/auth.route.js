var express = require('express');
var validate = require('../validate/user.validate')
var router = express.Router();

var controller = require('../controllers/auth.controller');

router.get('/login', controller.login);
router.post('/login', controller.postLogin);
module.exports = router;