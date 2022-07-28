const fs = require('fs');


const caminho = __dirname + '/arquivo.json'

//sicrono...
const conteudo = fs.readFileSync(caminho,'utf-8');// não é recomendado porque ele so libera o inventloop depois de lê o arquivo por completo
console.log(conteudo);

//assicrono... //por uma callback -> so chamado quando o arquivo é carregado!!
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Para lê em especifico o formato JSON

const config = require('./arquivo.json'); //convertando já para um objeto!
console.log(config.db);

//Para lê uma pasta

fs.readdir(__dirname,(err, arquivos)=>{
    console.log('Conteudo da pasta...');
    console.log(arquivos);
})