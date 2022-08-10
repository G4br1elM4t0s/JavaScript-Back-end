//Arrow Function
const soma = (a,b) => a+b

console.log(soma(2,3));

//Arrow Function (this)
const lexico = () => console.log(this === exports);
const lexico2 = lexico.bind({})

lexico()
lexico2()

//parametro default
function log(linguagens = 'Html,css,Js,Node.js'){
    console.log(linguagens);
}

log();
log('Java,Spring-Boot');

//Operador rest (agrupar)
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total +=n);
    return total;
}

console.log(total(1,2,3,4,5));



