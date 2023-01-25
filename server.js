
const mongoose =require('mongoose');
const app = require('./app');
mongoose.set('strictQuery',false);

require('dotenv').config({path:'variables.env'});



//Conexão ao banco de dados
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true,useUnifiedTopology:true});//string de conexão
mongoose.Promise=global.Promise;//Liberan 
mongoose.connection.on('error', (error)=>{
    console.error("ERROR: "+error.mmessage);
});


app.set('port',process.env.PORT|| 7777);
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta : "+server.address().port);
}
);  