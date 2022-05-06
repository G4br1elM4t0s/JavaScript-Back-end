//Armazenar uma função em uma variavel

const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(2,3);


//Armazenar uma função arrow em uma variavel
//forma reduzida
const soma = (a,b) => {
    return a +b;
}
//famosa arrow function
console.log(soma(2,3));

// retorno implicito
const subtracao = (a,b) => a-b //ou seja quando terá apenas uma linha de codigo 
console.log(subtracao(2,3));


imprimir2 = a => console.log(a);
imprimir2('Legal!!! Meu nome é Gabriel')
