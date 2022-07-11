const quaseArray = {0: "Rafael", 1: "João", 2: 'Henrique', 3: "André", 4: "Guilherme"};
console.log(quaseArray);
Object.defineProperty(quaseArray,'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0]);


const melhoresAmigos = ['Henrique', 'João', 'André', 'Guilherme', "Rafael"];
console.log(quaseArray.toString() ,  melhoresAmigos);
