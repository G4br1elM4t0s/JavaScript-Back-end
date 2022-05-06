//não é porque uma função em JS não passamos paramêtros
//que ela não recebe paramêtros... mais umas das
//estranhezas de JAVASCRIPT...

function soma(){
     let soma =0;
     for(i in arguments){
         soma += arguments[i]
     }
     return soma
}
console.log(soma());
console.log(soma(1));
console.log(soma(1.1,2.2,3.3));

//no exemplo a baixo iria fazer primeiro a soma dos elementos e depois concatenar

console.log(soma(1.1,2.2,3.3, "Teste"));

