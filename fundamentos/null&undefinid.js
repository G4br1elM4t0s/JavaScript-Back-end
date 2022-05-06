//conceitos de null 
//atribuição por valor 
//atribução por referencia
const a = {name : 'teste'}
const b = a //em objetos a atribuição éfeita por referencia no caso ela aponta para o mesmo objeto na memoria por isso quando alteramos a variavel name a alteração é feita em ambas

b.name = 'Opa'
console.log(a.name);

let c = 3 
let d = c //copia por valor, no caso a variavel de c é independente da variavel de c


d++
console.log(d)
console.log(c)