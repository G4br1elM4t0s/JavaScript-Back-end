function gerarNumeros(min, max) {
    if (min > max) {
        [max, min] = [min, max]; //lado esquerdo destructuring lado direito array
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
        resolve(aleatorio)
    })

}

gerarNumeros(10, 30)
    .then(num=>num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)