var express = require('express');
var router = express.Router();
var geekboxController = require('../controllers/geekboxController')

/* GET home page. */
router.get('/', geekboxController.home);
router.post('/', geekboxController.home); 

module.exports = router;
