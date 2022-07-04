//Object.preventExtensions. Ou seja esse metodo  previne a extenções de atributos no seu objeto

const produto = Object.preventExtensions({
    nome:'Caneta',
    preco: 1.99,
    desconto: 0.1
})

console.log('Extensilvel: ',Object.isExtensible(produto));
produto.descricao = 'Caneta azul'
produto.nome = 'borracha'
delete produto.desconto
console.log(produto);




//Object.seal

const pessoa = {nome:'Gabriel', idade:19}
Object.seal(pessoa)
console.log("Selado:",Object.isSealed(pessoa));

pessoa.sobrenome = 'Matos'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa);

//Objeto.freeze = selado + valores constantes;

