//porque ultilizar a promise...
//existe um conceito chamado de callback rell
//exemplo abaixo

setTimeout(function () {
    console.log("Executando");

    setTimeout(function () {
        console.log("Executando");

        setTimeout(function () {
            console.log("Executando");
        }, 2000);
    }, 2000);
}, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(function (res) {
        setTimeout(function () {
            console.log("executando promise...");
            res();
        }, tempo);
    });
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
