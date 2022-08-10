//Tagged Template - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes);
    console.log(valores);
    return 'outra string';
}


const aluno = 'Gui'
const situacao = 'Aprovado'
const hey = 'Hey!!!!!'
console.log(tag  ` oi ${aluno} está ${situacao} . ${hey} 123`);
//ou seja sai concatenando parte + valor +parte +valor+ parte ...