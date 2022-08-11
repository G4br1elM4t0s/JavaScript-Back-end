//não aceita repetição e não indexada
const times = new Set()
times.add('Vasco');
times.add("Bahia");
times.add("Vitoria");
times.add("Vitoria");
times.add("Flamengo")

console.log(times);
console.log(times.size);
console.log(times.has('vitoria'));
console.log(times.has('Vitoria'));
times.delete('Vitoria');
console.log(times.has('Vitoria'));

const nomes = ['Raquel','Lucas','Omar','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);