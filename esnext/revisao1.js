//let e const

{
    var a = 2
    let b = 3 //escopo de bloco
}
console.log(a);


//templete string 
const produto = 'ipad'

console.log(`${produto} é caro`);

//Operador Destructuring
const [l,e, ...tras] = "cod3r" 
console.log(l,e,...tras);

const[x, ,y] = [1,2,3]
console.log(x,y);

const{idade, nome}= { nome: 'Matos', idade:19};
console.log(idade,nome);