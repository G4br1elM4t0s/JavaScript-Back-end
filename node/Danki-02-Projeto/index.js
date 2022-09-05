const express = require('express');
const { values } = require('lodash');
const path = require('path')

const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
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
        res.send('Você buscou: ' + req.query.busca)
    }
})

app.get('/:slug',(req, res)=>{
    
    res.send(req.params.slug);

})

app.listen(5100, ()=>{
    console.log('Servidor esta rodando!');
})
