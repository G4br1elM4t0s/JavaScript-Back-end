const port = "3003";

const express = require("express");
//A chamada abaixo está instanciando a chamada express... na variavél app
// que servirá para colocar o serviços.
const app =  express();
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');


//para qualquer requisição que você faça ele irá passar por este middle
app.use(bodyParser.urlencoded({ extended: true }))


//teste abaixo
app.get('/produtos',(req,res,next)=>{
    res.send(bancoDeDados.getProdutos()) // Converter para JSON automáticamente pelo metódo send 
})

app.get('/produtos/:id',(req,res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

app.post('/produtos', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })   
    res.send(produto) //Final das contas será transformado em JSON
})

app.put('/produtos/:id', (req,res,next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })   
    res.send(produto)
})

app.delete('/produtos/:id', (req,res,next)=>{
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})






app.listen(port,()=>{
    console.log(`O servidor está execuntando na porta ${port}` );
})
