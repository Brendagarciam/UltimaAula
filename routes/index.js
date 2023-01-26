const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    let obj = {
        nome: req.query.nome,
    }; //para renderizar
    res.render('home',obj);
});

module.exports = router;