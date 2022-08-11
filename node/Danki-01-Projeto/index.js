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


var times= [ 'Vitoria' , 'Bahia', 'Flamengo' , 'Vasco']

app.post('/',(req, res) => {
    
    times.push(req.body.time);
    res.render('index',{timesList:times})
})

app.get('/', (req, res) => {
    
    res.render('index',{timesList:times})
    
})
app.get('/deletar/:id', (req, res) => {
    times = times.filter((val,index)=>{
        if(index != req.params.id){
            return values;
        }
    })
    res.render('index',{timesList:times});   
})

app.listen(5000, ()=>{
    console.log('Servidor esta rodando!');
})

