//manipulador de arquivos
const fs = require('fs');
//Gerenciamento de rotas
const path = require('path');



function leitorArquivos(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        })
    })
}


const caminho = path.join(__dirname, 'teste.txt');
leitorArquivos(caminho)
.then(conteudo => conteudo + " Hello world")
.then(conteudo => conteudo.split('\n'))
.then(conteudo => console.log(conteudo[3]));

 