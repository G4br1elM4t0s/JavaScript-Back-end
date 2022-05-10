const notas = [7.7, 6.6, 5.5, 4.4,8.2,9.5]


//sem usar o callback
//muito mais trabalhoso

let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

//com o callback

const notasAltas = notas.filter(function (notas) {
    return notas > 7
})

console.log(notasAltas);


//utilizando o callback com a ArrowFunction

const notasBaixas1 = notas.filter(notas => notas > 4) 
console.log(notasBaixas1);