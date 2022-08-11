const http = require('http');
const fs = require('fs');


const hostname = "127.0.0.1";
const port =3000;

// //criar novo arquivo
// fs,fs.writeFile('teste.txt','teste teste teste', ()=>{
//     if(err) throw err;
//     console.log('o arquivo foi criado com sucesso');
// })

//cria novo arquivo ou insere o conteudo depois que já exite
// fs.appendFile('teste.txt', 'teste teste teste oioi', ()=>{
//     if(err) throw err;
//     console.log('alterado com sucesso');   
    
// })


const server = http.createServer((req,res)=>{
    fs.readFile('teste.txt',(err,data)=>{
        console.log(data.toString());
    })
    //informações da requisição
    if(req.url === '/home'){ 
        fs.readFile('index.html',function(err,data){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            return res.end();
           
        })
    }else{
        res.end()
    }

  

})

server.listen(port,hostname,()=>{
    console.log("servidor rodando!!")
})