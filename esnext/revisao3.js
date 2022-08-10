//ES8 : Object.values/ Object.entries;
const obj ={ a: 1, b: 2, c: 3, d: 4, e: 5};
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Melhorias na notação literal 
const nome = 'Carla'
const pessoa ={
    nome,//não precisamos utilizar o padrão antigo para criação de atributos "nome:nome"
    ola(){
        return 'Oi'
    }
}

console.log(pessoa.nome, pessoa.ola());

//Class em javascript
class Animal{}
class Cachorro extends Animal{
    latir(){
        return 'Au Au Au';
    }
}

console.log(new Cachorro().latir());