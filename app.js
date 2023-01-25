//Fazendo a importação do express
const express = require('express');

//Rotas (quando o servidor for acessado pra onde ele vai)
const router = express.Router();
router.get('/', (req, res) => {//Primeira rota //função anonima // dois parametros
    res.send("Eu consegui...");
});

//configurações basicas do aplicativo
const app = express();
app.use('/', router);//Foi passado 1 rota pois criamos apenas 1

module.exports = app;//exportação do modulo

