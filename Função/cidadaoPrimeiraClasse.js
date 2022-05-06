//trabalhando com fuction em js
//quais as possibilidades??
//logo abaixo
//Função em JS é First-class Object(Citizens)
//Higher-order function || é um dos pilares que habilitam ter programação funcional dentro de uma
//linguagem de programação


//podemos tratar função como um dados

//criando de forma literal
function fun1() { }

// Armazenar em uma variavel

const fun2 = function () {}

//Armazenar dentro de um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0] (2,3));


//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar());


//passar função como parametro
function run(fun){
    fun()
}

run(function() {console.log('executando...')})

//um uma função pode retorna/conter uma função

function soma(a,b){
    return function (c){
        console.log(a+b+c);
    }
}
//que coisa esquisita...
//nossa kkkkkkkkk é muito difirente de java, kotlin ou c

soma(2,3)(4)
//outra possibilidade
const calc = soma(2,3)
calc(10)