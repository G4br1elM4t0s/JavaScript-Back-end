//par nome/valor
const saudacao ='Opa' //contexto léxico 1


function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao;
}


// Objeto são grupos aninhados de pares nome/valor

const Cliente = {
    nome : 'Gabriel',
    idade : 32,
    peso : 54,
    endereco : {
        cep : '45213123',
        numero : 123
    }
}


console.log(saudacao);
console.log(exec());
console.log(Cliente);
