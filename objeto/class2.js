class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo{
    constructor(sobrenome,profissao = 'Desempregado'){
        super(sobrenome)
        this.profissao = profissao;
    }
}

class Filho extends Pai{
    constructor(){
        super('Cunha')
    }
}

const filho = new Filho;
console.log(filho);


