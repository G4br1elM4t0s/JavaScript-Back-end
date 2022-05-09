const fabricantes = ["Mercedes","Audi","BMW"]


function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);//isso significa um templete String

}

fabricantes.forEach(imprimir)
