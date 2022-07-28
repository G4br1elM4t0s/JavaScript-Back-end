const port = "3003";

const express = require("express");
//A chamada abaixo está instanciando a chamada express... na variavél app
// que servirá para colocar o serviços.
const app =  express();
const bancoDeDados = require('./bancoDeDados');




//teste abaixo
app.get('/produtos',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos()) // Converter para JSON automáticamente pelo metódo send 
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

app.post('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.preco,
        preco: req.body.preco
    })   
    res.send(produto) //Final das contas será transformado em JSON
})




app.listen(port,()=>{
    console.log(`O servidor está execuntando na porta ${port}` );
})
