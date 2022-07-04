let stringPontuacoes = "30,40,20,4,13,9,22,17,0"

function pontuacoe(stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(",")
    let qtdRecordsQuebrados = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(let i = 1; i< pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i];
            qtdRecordsQuebrados ++
        }else if(pontuacoes[i]<menorPontuacao){
            menorPontuacao = pontuacoes[i];
            piorJogo = i + 1;
        }
    }
    return [qtdRecordsQuebrados,piorJogo];


}

console.log(pontuacoe(stringPontuacoes));