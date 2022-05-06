let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)// negar a negação ou seja transforma variaveis em verdadeiro ou falso

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('para finalizar...')
console.log(!!('' || null || ''))


//uso na pratíca 


let nome = 'Gabriel Matos'
console.log(nome || 'Nome invalido') // se estiver vazia a String significa que ela está falsa ou seja iria imprimir
                                     //usar a outra informação como valor padrão;
                                     //faz parte essa forma de escrever nesta linguagem...
