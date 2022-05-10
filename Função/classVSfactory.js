class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`meu nome é ${this.nome}`);
    }
}


//criando objetos em JAVASCRIPT 
const p1 = new Pessoa('Gabriel') 
const p2 = new Pessoa('Rafael')
p1.falar();
p2.falar();


//Esse objeto tem ciência do contextoLexico que está acessando

const pessoa = nome =>{
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const p3 = pessoa('João')
p3.falar()