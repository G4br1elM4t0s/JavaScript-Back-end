const pessoa = {
    saudacao : 'Bom dia!!!!',
    //pode-se criar metodos sem precisar
    //colocar falar : function(...)
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO



//usar o bind 
// A function bind é um metodo que cria uma nova function
// que quando chamada define a palavra chave this
//com o valor fonecido 
const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa();


