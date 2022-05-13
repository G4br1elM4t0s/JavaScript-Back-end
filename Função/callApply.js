function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1- imposto)}`
}

const prod = {
    nome: 'notebook',
    preco:4521,
    desc: 0.15,
    getPreco
}


global.preco=20;
global.desc=0.1;

console.log(getPreco());
console.log(prod.getPreco());

const carro = { preco : 30000, desc: 0.10}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//Está na passagem de parâmetros, apply invoca uma função com o
// this (contexto ) e um array com os parâmetros da função, já o call 
//utiliza como primeiro parâmetro o this(contexto) e os próximos são 
//os parâmetros da função.
//ou sejá ambos resolvem o mesmo problema

//call
console.log(getPreco.call(carro, 0.10, '$'));
//apply
console.log(getPreco.apply(global , [0.10 , '$']));