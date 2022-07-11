function frutas(nome){
    switch (nome) {
        case 'maça':
            return 'Não vendemos esta fruta aqui';
            break;
        case 'kiwi':
            return 'Estamos com escassez de kiwis';
            break;
        case 'melancia':
            return "Aqui está, são 3 reais o quilo";
        default:
            return 'erro!!!!';
            break;
    }
}


console.log(frutas('maça'));
console.log(frutas('kiwi'));
console.log(frutas('melancia'));
console.log(frutas('maçaaaa'));