const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const user = "Gabriel";
const pass = "bababa10";


//conexão com o banco de dado
mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.3luw0ba.mongodb.net/MTask?retryWrites=true&w=majority`, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
    console.log('conectado com sucesso');
}).catch((err)=>{
    console.log(err.message);
})



// sempre irá olhar para arquivos html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, '/pages'));//dentro da pasta pages...


app.get('/',(req, res)=>{
    // organizando minha rota statica 
    if(req.query.busca == null){
        res.render('home',{})
    }
    else{
        //pagina de busca
        res.render('busca',{});
    }
});

app.get('/:slug', (req,res)=>{
    res.render('single',{});
});

app.listen(5100, ()=>{
    console.log('Servidor esta rodando!');
});
