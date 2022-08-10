//Objetivo controlar o parser de uma template
function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor);
    })
    return resultado.join(' ');
}

const preco = 29.82;
const parcela = 11
console.log( real `${preco} ou 3 vezes de ${parcela}`);


