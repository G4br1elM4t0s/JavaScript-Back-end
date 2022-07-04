class Lancamento{
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome;
        this.valor = valor;

    }
}


class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes;
        this.ano =ano; 
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado=0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 2000);
const contaDeLuz = new Lancamento('conta de luz', -180);
const cartaoCredito = new Lancamento('cartaoCredito', -1000);

const contas = new CicloFinanceiro(4, 2022);
contas.addLancamentos(salario, contaDeLuz, cartaoCredito)
console.log(contas.sumario());
