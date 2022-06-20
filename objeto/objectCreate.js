//usando a notação literal
//Em javascript o nivel global só aparece de acordo com o nivel de visibilidade do na-
//vegador (window => global, function => restrito ), existe também o nivel de visibilidade função, e de bloco de codigo
const obj1 = {}
console.log(obj1);


//object em js
console.log(typeof Object,typeof new Object);
const obj2 =  new Object
console.log(obj2);


// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome;
    //this significa que o atributo é publico, sem o this significa que o atributo é privado dentro da 
    //function ou seja o js tem dois niveis de visibilidade.

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
        //ou seja é possivel manipular os atributos preco e desconto só dentro da funcional

    }
}
const p1 = new Produto('mesa', 700.00, 0.15);
const p2 = new Produto('celular', 1500.00,0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


//function Factory
//padrão de projeto que fabrica um objeto

function criarFuncionario(nome, salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,

        getSalario(){
            return(salarioBase/30)* (30-faltas);
        }
    }
}


const f1 = criarFuncionario('Gabriel', 1500, 4);
const f2 = criarFuncionario('Angela', 1000, 5);

console.log(f1.getSalario(), f2.getSalario());


//função create -> object.create


const filha = Object.create(null);
filha.nome =  "Jailton";
console.log(filha);

//uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);
