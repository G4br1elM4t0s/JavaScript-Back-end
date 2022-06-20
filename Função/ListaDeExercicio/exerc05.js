function valor(valor1){
    valorEmReais = `R$ ${valor1.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais);
}

valor(0.1 + 0.2);