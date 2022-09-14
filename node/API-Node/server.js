const express =  require('express');

const app = express();

app.use(express.json);

app.listen(3000,(req,res)=>{

    console.log('Listening on port 3000');
})