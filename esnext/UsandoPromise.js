//Com o promis
const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let resultado = "";

      res.on("data", (dados) => {
        resultado += dados;
      });

      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// //callback hell
// let nomes = [];
// getTurma('A').then(alunos=>{
//     nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`));
//     getTurma('B').then(alunos=>{
//         nomes =  nomes.concat(alunos.map(a=> `B: ${a.nome}`));
//         getTurma('C').then(alunos=>{
//             nomes =  nomes.concat(alunos.map(a=> `C: ${a.nome}`));
//             console.log(nomes);

//         });
//     });
// });

//Uma boa pratica de programação, do uso do promise é utilização do cath para fazer o possivel tratamento de erro.

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes));

getTurma("D").catch((e) => console.log(e.message));
