const escola = "Cod3r";


console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(4)) //retorna o numero da tabela ascii
console.log(escola.indexOf('C')); // irá falar em qual indice ele está

console.log(escola.substring(1)); //imprimirar od3r
console.log(escola.substring(0 , 3))// vá do indice zero ate o indice 3

console.log('Escola'.concat(escola.concat("!")));

console.log(escola.replace(3, 'e'));// troca 

console.log('Gabriel,João,Rafael'.split(','));