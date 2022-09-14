const nome = 'Gabriel'
const concatenacao = 'Olá ' + nome + '!'
//pode ter quebra de linhas no templete de linhas

const templete = `
    Olá
    ${nome}!
`

console.log(concatenacao, templete)

console.log(`1 +1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);