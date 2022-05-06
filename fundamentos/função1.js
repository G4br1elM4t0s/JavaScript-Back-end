//função sem retorno ou seja um void
function imprimirSoma(a,b){
    console.log(a+b);

}


imprimirSoma(2,3)
imprimirSoma(1)


//funçao com retorno

function soma(a , b = 0){
    return a + b

}

console.log(soma(2,3));