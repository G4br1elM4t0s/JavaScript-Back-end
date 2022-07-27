// console.log(global);
// quando esse modulo for lido qual quer outro arquivo poderá lê o global

globalThis.minhaApp = {
    saudacao(){
        return 'Estou em todos os lugares';
    },
    nome: 'Sistema Global'
}