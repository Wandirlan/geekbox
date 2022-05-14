var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clienteController');
const { body} = require('express-validator');

router.get('/login', clienteController.login);
router.get('/cadastro', clienteController.cadastro);
router.post('/login', clienteController.autenticaLogin);

module.exports = router;