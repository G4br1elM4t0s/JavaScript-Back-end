//No Objeto a key é um literal qual quer como uma string 
//no map a chave pode ser uma função um numero um objeto tendo uma maior flexibilidade 


const tecnologias = new Map()
tecnologias.set('react',{framework: false});
tecnologias.set('Angula',{framework: true});
console.log(tecnologias);
console.log(tecnologias.get('react').framework);


const chavesVariadas = new Map([
    [function () { }, "Função"],
    [{}, 'Objeto'],
    [123, 'numero'],
])

chavesVariadas.forEach((vl,ch) =>{
    console.log(ch, vl);
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b');

console.log(chavesVariadas);