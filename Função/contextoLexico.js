//contextoLexico javascript

const valor = 'Global'
//local onde ela foi definida, "local global"
function minhaFuncao(){
    console.log(valor);
}


minhaFuncao();


function exec (){
    const valor = 'Local'
        //local onde foi definida "reservada"
        function minhaFuncao(){
            console.log(valor);
        }
    minhaFuncao();

}
exec()

//fui tentar entender e estou mais perdido do que estava
//entendi agora ksksksks

