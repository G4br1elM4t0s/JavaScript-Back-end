const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

require('./routes')(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect('mongodb+srv://Gabriel:a2bdgh7b@cluster0.lsoqold.mongodb.net/NTasks?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

app.listen(3000,(req,res)=>{
    console.log('Example app listening on port 3000');
});
