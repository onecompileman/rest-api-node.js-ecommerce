const express = require('express');
const router = express.Router();
const con = require('../database');

router.post('/', (req, res, next) => {
    con.query(`INSERT INTO brand(name) VALUES('haha')`);
    res.status(201).json({ message: req.body });    
});

module.exports = router;
