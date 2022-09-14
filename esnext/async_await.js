function esperarPor(tempo = 2000) {
    return new Promise(function (res) {
        setTimeout(() => {
            res();
        }, tempo);
    });
}


// esperarPor(2000)
//     .then(() => console.log("executando promise 1 ..."))
//     .then(esperarPor)
//     .then(() => console.log("executando promise 2 ..."))
//     .then(esperarPor)
//     .then(() => console.log("executando promise 3 ..."))

function retornaValor(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(10),5000);
    })
}

async function executar() {
    let valor = await retornaValor()

    await esperarPor(2000)
    console.log(`async/await 1 ${valor}...`);
    await esperarPor(2000)
    console.log('async/await 2 ...')
    await esperarPor(2000)
    console.log('async/await 3 ...')
}

executar()