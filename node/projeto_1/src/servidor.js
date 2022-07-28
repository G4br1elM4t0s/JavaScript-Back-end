const port = "3003";

const express = require("express");
//A chamada abaixo está instanciando a chamada express... na variavél app
// que servirá para colocar o serviços.
const app =  express();





//teste abaixo
app.get('/produtos',(req,res,next)=>{
    res.send({nome:'caneta', preco:1.50}) // Converter para JSON automáticamente pelo metódo send 
})




app.listen(port,()=>{
    console.log(`O servidor está execuntando na porta ${port}` );
})
