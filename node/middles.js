//middleware patter (chain of responsibility);
const passo1 = (ctx, next)=>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'mid2'
    next()
}


//Um unico objeto que é passado de uma função para outra.
const passo3 = ctx => ctx.valor3 = 'mid3';


// Os '...' significa conjunto de funções ou de atributos a serem passados como paramentros e é conhecido como operador rest
//Ideia central é receber varias funções e juntar elas em um unico array.

const exec = (ctx,...middlewares) =>{
    const execPasso = indice =>{
        middlewares && indice< middlewares.length &&
        middlewares[indice](ctx, ()=> execPasso(indice+1))
    }
    execPasso(0)
}

const ctx ={}

exec(ctx, passo1,passo2,passo3);
console.log(ctx);
