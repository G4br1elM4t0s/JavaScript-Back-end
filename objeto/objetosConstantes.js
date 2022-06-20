//pessoa -> 123 ->{...}

//nesse primeiro momento o pessoa é uma variavel ou seja o objeto pessoa pode alterar o seu nome 
const pessoa = {nome: 'Gabriel'};
pessoa.nome = "Jailton";
console.log(pessoa);


//pessoa -> um novo endereco -> { apontando para um novo objeto}

//pessoa =  {nome: 'Clebinho'};

//conclusão a constante pessoa não pode atribuar muitas vezes o nome para a mesma constante



Object.freeze(pessoa);
pessoa.nome = 'Gatinho';

console.log(pessoa.nome);

//uma forma de criar um objeto constante em javaScript é utilizaro freeze na instancia da variavel

const pessoaContante = Object.freeze({nome: "José"});


console.log(pessoaContante);

pessoaContante.nome = "Romano";
console.log(pessoaContante);