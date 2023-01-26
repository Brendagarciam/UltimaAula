const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');

//configurações basicas do aplicativo
const app = express();
app.use('/', router); //Foi passado 1 rota pois criamos apenas 1

app.use(express.json());

app.engine('mst', mustache(__dirname + '/views/partials','.mst'));
app.set('view engine', 'mst');

//pega o diretorio absoluto do projeto e aumenta para pasta views concatenando
app.set('views', __dirname + '/views');

module.exports = app; //exportação do modulo

