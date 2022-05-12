var express = require('express');
var router = express.Router();


router.get("/teste", (req, res) => {
    res.render('index');
});

module.exports = router;