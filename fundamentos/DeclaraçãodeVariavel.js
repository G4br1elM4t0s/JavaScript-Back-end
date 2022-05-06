//Trabalharemos com o var nesse arquivo
{
    {
        {
            {
                var sera = 'Sera????' // variavel var ficará visivel para em qualquer lugar do bloco de codigo exceto em fuctions
            }
        }
    }
}

console.log(sera);

//exelpo de variavel 'var' dentro de uma function
//há problemas em criar variaveis do tipo global em programas javaScript
//porque é importante fugir de variaveis que são criadas em escopo global????]
//resposta: A real vantagem de poder ser acessada de qualquer lugar do sistema... e 
//o Maior problema de poder ser alterada e posteriormente prejudicar o funcionamento do sistema;



function teste() {
    var local =123
    console.log(local);

}
teste()
// console.log(local);