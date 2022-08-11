const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual o seu nome',function(name){
    console.log('o nome do usuario é ' + name);
})

rl.on('close',()=>{
    console.log('adeus');
    process.exit(0);
    
})