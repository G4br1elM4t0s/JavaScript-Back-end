//É uma estrutura linear
//Estrutura indexada... ou seja 1° elemento acessado pelo indice um
//Em java o array é fixo 
//Em js o array é heterogêneo... ou seja podendo armazer string number... e etc...
// flexivel 
// O array em js é totalmente dinâmico; podendo crescer ou diminuir;

const valores = [7,1.2,3.4,12,]
console.log(valores[1])
console.log(valores[4])

valores[4]=10 
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)// demostrando um array, heterogêno ou seja com multiplos valores, sendo eles objeto
                    //tos, boolean, String, e nulo
                    //quando tentamos acessar um valor que não existe ele não dará erro e sim retonara
                    //indefinido.
console.log(valores.length)
valores[12] =  15;
console.log(valores) //não é uma boa prática colocar varios valores em um array
                     // não misturar dados
console.log(valores.pop())
delete valores[0]

console.log(valores)
console.log(typeof valores)
