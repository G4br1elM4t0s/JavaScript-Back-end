console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

console.log(module.exports);

exports = {
    nome: 'teste',
    dataCriacao: '27/07'
}

console.log(module.exports);

module.exports = {public: true};
