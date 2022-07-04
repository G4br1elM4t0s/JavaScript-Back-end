const pai = { nome: 'Rafael', corCabelo: 'preto'};


const filha1 = Object.create(pai);
filha1.nome = 'Ana';

console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Rafaela', writable: false, enumerable: true}
})
 

console.log(filha2.nome);

filha2.nome = 'Carla';

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in  filha2){
    

    //essa funçaõ faz uma validação para vê se aquele respectvo atributo pertence ao
    // objeto setado
    //Com outras palavras essa é a forma de saber se essas caracteristicas vinheram pelo objeto ou chegaram por herança
    filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Por herança : ${key}`);;
}