//coleção dinâmica de pares chave/valor

const produto = new Object;
produto.nome = 'lapis';
produto['marca do produto'] = 'Generica';

produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Gabriel',
        idade: 19,
        endereco:{
            lograduro : 'Rua abc',
            numero: 123
        }
    },
    condutores:[{
        nome:'Rafael',
        idade:22

    },{
        nome:'Julia',
        idade:25
    }],
    calcularValorDoSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro']='Av Rio Branco';

console.log(carro);

console.log(carro.condutores);
