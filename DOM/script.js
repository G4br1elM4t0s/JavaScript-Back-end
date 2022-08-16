var p = document.getElementsByTagName('p');


//para lê atraves das tags
// alert(p[4].innerHTML);


var nome =prompt('digite seu nome');

p[0].innerHTML = 'manipulado via js ' + nome;

 

for(let i = 1; i< p.length; i++) {

    p[i].innerHTML = 'manipulado via js' + i;

}


