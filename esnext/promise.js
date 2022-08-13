function falarDepois(segundos, frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase);
        },segundos * 1000);
    })
}

falarDepois(3,'Uau que maneiro Joãozinho seu boot novo').then(frase => frase.concat("?!?!"))
.then(outraFrase => console.log(outraFrase)).catch(err => console.log(err));