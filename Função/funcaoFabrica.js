// É um padrão de projeto
//Basicamente é uma function que retorna um onjeto


//fica repetitivo a criação do objeto
/*
const prod1 = {
    nome : 'caneta',
    preco: 2.5,
    qtd: 5
}
*/

//factory simples

function criarPessoa(){
    return {
        nome : 'Gabriel',
        sobreNome: 'Matos'
    }
}

console.log(criarPessoa());
