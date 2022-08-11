//Intera em cima de valores

for (let letra of "cod3r"){
    console.log(letra);
}

const assuntosEcma = ['Map','Set','Promise']

//imprimirar os indices do array
for(let i in assuntosEcma){
    console.log(i);
}

//imprimirar todos os valores do array
for(let i of assuntosEcma){
    console.log(i);
}


const assustosMap = new Map([
    ['Map',{abordado: true}],
    ['Set',{abordado: true}],
    ['Promise',{abordado:false}]
])

for(let assunto of assustosMap){
    console.log(assunto);
}

for(let chave of assustosMap.keys()){
    console.log(chave);
}

for(let value of assustosMap.values()){
    console.log(value);
}

for(let [ch,vl] of assustosMap.entries()){// pegando de forma explicida os registros de um map
    console.log(ch,vl)
}


const s = new Set([
    'a',
    'b',
    'c'
])
for(let letra of s){
    console.log(letra);
}