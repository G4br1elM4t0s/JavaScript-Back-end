//closure é o escopo criado quando uma função é 
//declarada e esse escopo permite a função acessare mani-
//pular variáveis esternas à função

//contextoLexico em ação

const x ='Global';

function fora(){
    const x = "local";
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());