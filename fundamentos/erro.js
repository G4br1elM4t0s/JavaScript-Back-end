function tratarErroElancar(erro){
    //throw new Error('...');
    //throw 10;
    //throw true
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
   try{ //um bloco de codigo como o de uma fuction
    //onde jugalmos que possivelmente terá um erro;
    console.log(obj.name.toUpperCase() + '!!!!');
   } catch(e){
       tratarErroElancar(e)
   }finally{
       console.log('final');
   }

}

const obj = { nome : 'Roberto'}
imprimirNomeGritado(obj);
