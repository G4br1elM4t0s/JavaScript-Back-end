const bruxos = ['Harry','Snake','Sirius Black','Lupin'];
bruxos.pop() // remove o ultimo elemneto do array   
console.log(bruxos);

bruxos.push('Hermione'); // adiciona um elemento na ultima posição do array
console.log(bruxos);

bruxos.shift(); //remove o primeiro elemento do array
console.log(bruxos);

bruxos.unshift('Voldemort');
console.log(bruxos);// adiciona um elemento na primeira posição do array

//splice pode adicionar e remover elementos de um array

//adicionando 
bruxos.splice(2, 0,'Doby', 'Luna', 'Albus Dumbledore'); // ou seja os elementos estão sendo adicionados a
//apartir do segundo elemento do array 
console.log(bruxos);

// removendo 

bruxos.splice(3,1) // significa que estou removendo um unico elemento aparti do terceiro elemento deste array
console.log(bruxos);


const algunsBruxos = bruxos.slice(2) // novo array
console.log(algunsBruxos);

const algunsBruxos2 = bruxos.slice(1,3) // ou seja começara do indice 1 ate o indice 3 
console.log(algunsBruxos2);