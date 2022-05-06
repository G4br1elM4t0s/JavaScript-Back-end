//NOVO RECURSO ES2015
 


const pessoa = {
    nome : 'Gabriel',
    idade: 19,
    endereco: {
        lograduro : 'Graça',
        numero: 350
    }
}
console.log(pessoa.endereco);

pessoa.endereco.numero = 123

console.log(pessoa.endereco);

const { nome, idade} =pessoa
const { nome: n , idade: i} = pessoa

console.log(n,i);
console.log(pessoa);