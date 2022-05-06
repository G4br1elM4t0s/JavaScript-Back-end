let valor //não inicializado
console.log(valor); // valor inicial será undefined
valor = null // não tem nenhum valor dentro dela e não está apontando para nenhum espaço de memoria 
                // porem foi defenida
console.log(valor);
//console.log(valor.toString()); //erro

const produto = {


}

console.log(produto.preco);
produto.preco = 3.50
console.log(produto);
produto.preco = undefined //evitar atribuir undefined
                          // preferivel atribuir o 0
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null //sem preço
                    // ou seja caso queira dá um ebook de graça ... Exemplo da vida real
console.log(!!produto.preco);
console.log(produto);

//atribuição por valor... ou seja cada constante terá uma valor fixo independente
//atribuição por referencia... ou seja passam a apontar para o mesmo lugar... ps quando temos uma variavel apontando para nada não podemos acessar nada dela
