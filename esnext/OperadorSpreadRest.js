//operador ... rest(juntar)/Spread(espalhar)
//usar rest com parâmetro de funcão

//usar o spread com objeto
const funcionario = {nome:'Julia',salario:12345.2}
const clone = {ativo: true, ...funcionario}
console.log(clone);

//usar o spread com o array
const grupoA = ['Gabriel','Joao','Rafael']
const grupoB = ['Rafael' , ...grupoA , 'Guilherme']

console.log(grupoB);