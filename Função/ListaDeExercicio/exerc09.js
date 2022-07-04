function classificacaoNotasAluno(nota){
    let notaCorrigida = arredodarNota(nota);
    if(notaCorrigida>=40){
        console.log(`Aprovado com nota ${notaCorrigida}`);
    }else{
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredodarNota(nota){
    if(nota % 5 > 2){
        return nota + (5 - nota % 5);
    }else{
        return nota
    }
}


classificacaoNotasAluno(45.2)
classificacaoNotasAluno(50)
classificacaoNotasAluno(2)
classificacaoNotasAluno(85.7)
classificacaoNotasAluno(100)
classificacaoNotasAluno(75.9)
classificacaoNotasAluno(99)
classificacaoNotasAluno(49)

