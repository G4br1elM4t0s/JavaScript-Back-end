function gerarNumerosEntre(min,max,tempo){
    if(min>max){
        [max,min]= [min,max];
    }
    return new Promise(resolve =>{
        setTimeout(function(){
            const fator = max-min +1;
            const random = parseInt(Math.random() * fator) + min;
            resolve(random);
        },tempo);
    })
}

function gerarVariosNumeros(){
    return Promise.all([ //paralelismo em promises
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60,2000),
        gerarNumerosEntre(1,60,3000),
        gerarNumerosEntre(1,60,400),
        gerarNumerosEntre(1,60,500),


    ])
}

console.time('promise');
gerarVariosNumeros().then(numeros => console.log(numeros)).then(()=>{
    console.timeEnd('promise')
})