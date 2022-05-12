var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clienteController');

router.get('/login', clienteController.login);

module.exports = router;