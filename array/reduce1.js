const alunos = [ 
    {nome: 'Gabriel', nota: 8.3, bolsista: true},
    {nome: 'João',nota:9.7, bolsista: true},
    {nome:'Rafael',nota:7.0, bolsista:false},
    {nome:'Gabriela',nota:7.7, bolsista:false}
]



const resultado = alunos.map(a=> a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual);
    return acumulador + atual;
}, 0);

console.log(resultado);