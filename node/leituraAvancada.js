const fs = require('fs');


fs.unlink('Gabrellindo.txt',(err,data)=>{
    
    console.log('Arquivo deletado com sucesso');

})

fs.writeFile('testea.txt','oioi testando?',(err,data)=>{
    
    console.log('Arquivo criado com sucesso');
});

fs.rename('testea.txt','Gabriellindo.txt',(err,data)=>{
    console.log('arquivo renomeado confira o seu conteudo logo abaixo');   
    
})

fs.readFile('Gabriellindo.txt',(err,data)=>{
    
    console.log('lendo o novo arquivo');
    let leitor = data.toString();
    console.log(leitor);
    
})