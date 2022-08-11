const express = require('express');
const { values } = require('lodash');
const path = require('path')

const app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname, '/views'));

app.listen(5100, ()=>{
    console.log('Servidor esta rodando!');
})
