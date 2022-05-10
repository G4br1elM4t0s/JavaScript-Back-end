//função construtora

function Pessoa(nome){
        //possibilidade de fazer sem o this
        //porém o usuario perde acesso ao nome
        //sem o this.nome = nome;
        //EXEMPLO (p1.nome == undefined)
        //com o this.nome = nome
        //com o this.nome; resultado(p1.nome==nome)
        this.nome = nome;

        this.falar = function(){
        console.log(`meu nome é ${this.nome}`);
    }
}


//A mesma forma de criar objeto apartir de uma classe
// é a mesma forma de criar aparti de uma função

const p1 = new Pessoa('Gabriel') 
const p2 = new Pessoa('Rafael')
p1.falar();
p2.falar();
console.log(p1.nome);

