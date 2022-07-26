const alunos = [
    {nome: 'Gabriel', nota: 7.9},
    {nome:'Jailton', nota:10}
]


//Imperativo
let total = 0;
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota;
}

console.log(total/alunos.length);

//Declarativo

const getNota = aluno => aluno.nota;
const soma = (total1,atual) => total1+ atual
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2/alunos.length);