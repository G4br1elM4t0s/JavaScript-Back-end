const fs = require('fs');

const produto = {
    nome: 'televisão',
    preco: 1234.99,
    peso: '13-kg',
    desconto: 0.15
}

//Transformando objeto em um formato de texto JSON.Strigfy
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo com sucesso!');
})
