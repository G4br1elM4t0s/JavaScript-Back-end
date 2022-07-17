const meuObjeto ={
    a:1,
    b:2
}


//meuObjeto.__proto__ --> Objeto.prototype --> null


const meuArray = [1,2,3,4, 'a', 'b'];


// meuArray --> Array.prototype --> Objeto.prototype --> null

function minhaFunction(){
    return 1 * 2;
}

//minhaFunction --> Function.prototype --> Objeto.prototype --> null

//meuArray.map()

//Ou seja o ECMAScript verifica que a função map() está sendo declarada no objeto recém criado ou sejá no "meuArray" como não está atrelada ao "meuArray"
//ele verifica na próxima cadeia do protoType que é a do Array() e encontra o método posto(map()) lá
//ou seja se não encontrasse no proto do Array() iria para mais um nivel abaixo que seria Objeto.prototype caso não sejá encontrada lá então ela fala que a função
// não foi declarada em lugar nenhum ou seja retornando o valor 'null'


const novoObjeto = meuObjeto;


//nesse exemplo quando mudamos o valor de b estamos acessando o proto de meu objeto e alterando támbem o valor do "meuObjeto.b" pois ele verifica para qual proto esta apontando

novoObjeto.b = 5;
console.log(meuObjeto.b + novoObjeto.b);


//Para quebrar essa coisa estranha o ECM5 é criada o object.create() que recebe por parâmetro o objeto que queremos herdar
//ou seja criara um novo proto para apontar

novoObjeto2 = Object.create(meuObjeto);
novoObjeto2.b = 7;
console.log(novoObjeto2.b + meuObjeto.b);


function SalaAula(alunos) {
    this.alunos =  alunos || [];

}

SalaAula.prototype = {
    adicionarAluno: function(aluno){
        this.alunos.push(aluno)
    },
    mostrarAlunos: function(){
        return this.alunos
    }

}

function NovaSala(){
    SalaAula.call(this)
}

NovaSala.prototype = Object.create(SalaAula.prototype);

const novaSala = new NovaSala();
// quando fazemos isso acima estamos fazendo basicamente oque fizemos com o object...
//porém invés de apontar para o prototype de "SalaAula" apontamos para o prototype de NovaSala;


//no ESCMScript6 fariamos Class NovaSala exetends SalaAula{}
const minhaSala = new SalaAula(['Gabriel','João','Rafael','André','Henrique','Guilherme'])

minhaSala.adicionarAluno('Caio');

console.log(minhaSala.mostrarAlunos());


novaSala.adicionarAluno("Jailton");

console.log(novaSala.mostrarAlunos());
// assim mostrando uma novaSala apotando para um prototype diferente do de SalaAula;
//:) coisa linda agora está parecendo uma linguagem bonita
