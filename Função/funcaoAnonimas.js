const soma = function (x,y){
    return x + y;
}
//confuso mais basicamente o operacao esta assumindo o papel
// de soma que recebe como paramentro 'a' e 'b' somando as duas variaveis

imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a, b));
}

imprimirResultado(3,4)



imprimirResultado(3, 4, function(x, y){
    return x-y;
})

imprimirResultado(3,4, (x,y) =>  x *y)

//possibilidade de criar fução anonima dentro de um objeto


const pessoa = {
    //O normal seria isso 
    /*falar : function(){
        console.log("falando");
    }*/

    //porém com a nova versão do Js pode se utilizar
    falar(){
        console.log("falando");

    }
}

pessoa.falar()
