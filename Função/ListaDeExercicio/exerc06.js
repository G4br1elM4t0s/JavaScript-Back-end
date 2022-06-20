function jurosSimples(capInicial, taxaJuros, tempoAplicacao){
    return capInicial + (capInicial * taxaJuros * tempoAplicacao);
}

function jurosCompostos(capInicial, taxaJuros, tempoAplicacao){
    return capInicial + (1 + taxaJuros) * tempoAplicacao;

}

console.log(jurosSimples(100,10/100,2));
console.log(jurosCompostos(100,10/100,2));