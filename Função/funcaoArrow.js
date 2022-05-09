//Principais coisa que motivaram a criação
//da funcaoArrow foram a escrita incurtada 
//e a outra coisa é o fato de ter um this associado
//a está funcao
let dobro = function(a){
    return 2 * a
}


//função arrow sempre será uma função anonima
//caso queira chamar está função precisará armazenar
//está função em uma variavel ou alguma constante
//---- sintaxe ----
dobro = (a) => {
    return 2 * a
}


//return implicito
//só utilizado quando temos funções de uma 
//única linha assim, implicitamente o return é chamado 
//observe abaixo a function
dobro = a => 2 * a 

console.log(dobro(Math.PI));  

let ola =function(){
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola());