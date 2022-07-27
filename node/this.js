console.log(this === global);
console.log(this === module);

console.log(this === module.exports); // sim porque ele aponta para module.exports 
console.log(this === exports); //Sim porque ambos aponta para a mesma referência.

function logThis(){
    console.log('Estou dentro de uma function e a aponto para exports? ');
    console.log(this === exports);
    console.log('Aponto para o global?');
    console.log(this === global);
}


// Ou seja dentro de uma function o this aponta para o atributo global!!!
// fora da function ele continua apontando para module.exports
// OBS ter cuidado em usar o this em Arrow functions
// pois as arrow functions apontam para o objeto global
logThis();