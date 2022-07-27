const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'; 
const axios =  require('axios');

const chineses = f => f.pais === 'China';
const homens = f => f.genero === 'M';
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios);

    //Homens chinesas com menor sálario?
    // const func = 
    // funcionarios.filter(chineses)
    // .filter(homens)
    // .reduce(menorSalario)

    // console.log(func);

    const Russos = funcionarios.filter(function (f){
        return f.pais === 'Russia'
    })

    console.log(Russos);
})