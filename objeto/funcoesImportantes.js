const pessoa = {
    nome: "Gabriel",
    idade: 19,
    peso: 57
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));



//destructuring function
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable:false,
    value:'22/06/2003'
});
pessoa.dataNascimento = '22/01/2002';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));


//object.assign(ECMAScript 2015)


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const objt = Object.assign(dest, o1,o2);

console.log(Object.values(objt));

Object.freeze(objt);

objt.c = 1234
console.log(objt);
