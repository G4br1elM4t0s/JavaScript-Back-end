var number =1
{
    let number =2
    console.log('dentro =', number);// quando usamos o let ele primeiro procura no escopo menor se a variavel existe para depois validar em escopos maiores

}
// variaveis declaradas com o var tem escopo global e escopo de fuction
// variaveis declaradas com o let tem escopo global escopo de fuction e escopo de bloco;

console.log('fora =', number);