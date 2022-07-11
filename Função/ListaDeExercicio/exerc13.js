function diasDaSemana(numero){
    switch(numero){
        case 1:
            return 'Fim de semana';
            break;
        case 2:
        case 3:    
        case 4:
        case 5:
        case 6:
            return 'Dia util';
            break;
        case 7:
            return 'Fim de semana';
            break;        
    }
}

console.log(diasDaSemana(1));
console.log(diasDaSemana(7));
console.log(diasDaSemana(6));
console.log(diasDaSemana(5));
console.log(diasDaSemana(4));
console.log(diasDaSemana(3));
