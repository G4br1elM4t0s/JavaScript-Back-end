const alunos = [ 
    {nome: 'Gabriel', nota: 8.3, bolsista: true},
    {nome: 'João',nota:9.7, bolsista: true},
    {nome:'Rafael',nota:7.0, bolsista:false},
    {nome:'Gabriela',nota:7.7, bolsista:true}
]


//Desafio1: Todos os alunos são bolsista?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas));

//Desafio2: Algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista));