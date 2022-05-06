/*Objeto em javascript não é a mesma coisa que Json{
Json basicamente é um formato leve de troca de informações/dados entre sistemas.
Mas Json significa JavaScript Object Notation. E não é so utilizado no js não... muitos confundem
isso.
Como criar objetos em javaScript

}
*/

const prod1 = {} //o par de {} significa a forma literal de criar um objeto em js
prod1.nome = 'Celular ultra mega fodastico'
prod1.preco = 1400.23
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaco
console.log(prod1)
console.log(prod1.nome)


console.log(prod1)

const prod2 = {
    nome :  'Camisa polo', //para atribuir um atributo a um objeto em js utilizar ':' sempre terminada com ','
    preco : 72.2

}




