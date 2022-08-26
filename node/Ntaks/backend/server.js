const express = require('express');

const routes = require('./routes');

const app = express();

require('./routes')(app)

app.use(express.json());
app.set("json spaces",4);

app.listen(3000,(req,res)=>{
    console.log('Example app listening on port 3000');
});
