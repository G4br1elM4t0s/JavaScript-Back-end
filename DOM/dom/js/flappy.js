function novoElemento(tagName, className) { // Função responsável por criar os elementos no HTML e aplicar os estilos CSS neles
  const elem = document.createElement(tagName) // cria um elemento no HTML à partir do nome da tag
  elem.className = className // adiciona a classe CSS para esse elemento
  return elem // retorna o elemento criado
}

function Barreira(reversa = false) { // função construtora para criar barreiras
  this.elemento = novoElemento('div', 'barreira') // cria um elemento div com classe barreira

  const borda = novoElemento('div', 'borda') // cria um elemento div com classe borda
  const corpo = novoElemento('div', 'corpo') // cria um elemento div com classe corpo
  this.elemento.appendChild(reversa ? corpo : borda) // reversa == true, acrescenta corpo // reversa == false, acrescenta borda
  this.elemento.appendChild(reversa ? borda : corpo) // reversa == true, acrescenta borda // reversa == false, acrescenta corpo

  this.setAltura = altura => corpo.style.height = `${altura}px` // função que seta a altura do corpo das barreiras
}

// TESTE CRIAÇÃO DE UMA BARREIRA:
// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) { // função construtora para criar o par de barreiras
  this.elemento = novoElemento('div', 'par-de-barreiras') // cria um elemento div com classe par-de-barreiras

  this.superior = new Barreira(true) // cria uma nova barreira reversa à partir da função construtora Barreira
  this.inferior = new Barreira(false) // cria uma nova barreira não-reversa à partir da função construtora Barreira

  this.elemento.appendChild(this.superior.elemento)
  this.elemento.appendChild(this.inferior.elemento)

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura) // calcula a altura do cano superior de forma aleatória
    const alturaInferior = altura - abertura - alturaSuperior // calcula a altura do cano inferior, se baseando no valor gerado do cano superior
    this.superior.setAltura(alturaSuperior) // aplica a altura para superior com a função setAltura
    this.inferior.setAltura(alturaInferior) // aplica a altura para inferior com a função setAltura
  }

  this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) // função que pega a posição atual de x
  // Exemplo abaixo feito no próprio Browser
  // "100px".split('px')
  //     (2)["100", ""] // retorna um array, divindo a string em 2 posições
  // "100px".split('px')[0] // pega a posição 0 desse array gerado
  //     "100"
  // parseInt("100px".split('px')[0]) // converte o que era uma string em um int, para manipular o valor
  //     100
  this.setX = x => this.elemento.style.left = `${x}px` // função que altera a posição x
  this.getLargura = () => this.elemento.clientWidth // clientWidth pega a largura do elemento, incluindo padding, mas não incluindo bordas

  this.sortearAbertura()
  this.setX(x)
}

// TESTE CRIAÇÃO DO PAR DE BARREIRAS
// const b = new ParDeBarreiras(500, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) { // função construtora para adicionar a animação das barreiras
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura), // a primeiras barreira ficará inicialmente fora do jogo
    new ParDeBarreiras(altura, abertura, largura + espaco), // segunda barreira virá depois da primeira + o espaço definido
    new ParDeBarreiras(altura, abertura, largura + espaco * 2), // terceira barreira virá depois da segunda + o espaço
    new ParDeBarreiras(altura, abertura, largura + espaco * 3) // quarta barreira virá depois da terceira + o espaço
  ]

  const deslocamento = 3 // deslocamento das barreiras será de 3px

  this.animar = () => { // função responsável por fazer o deslocamento das barreiras
    this.pares.forEach(par => { // acessa cada barreira do array pares
      par.setX(par.getX() - deslocamento)
      // getX pega a posição left de cada barreira e tranforma em um número inteiro
      // valor resultante de getX é subtraido pelo deslocamento
      // setX irá alterar a posição left de cada barreira com o valor obtido pela operação

      // Quando a barreira sair da área do jogo (quando for menor que a largura negativa)
      // Para entender melhor o funcionamento da parte "-par.getLargura()":
      // https://www.udemy.com/curso-web/learn/lecture/10285408#questions/6925284
      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espaco * this.pares.length)
        // pega a posição atual de x com o getX
        // multiplica o valor do espaco pela quantidade de barreiras (elementos) dentro do array pares
        // soma esses dois valores obtidos e altera a posição da barreira com o setX
        // basicamente, quando as barreiras chegarem no final esquerdo da tela, elas irão para a posição inicial da quarta barreira
        par.sortearAbertura()
        // sorteia a abertura da barreira para aparecer em uma posição diferente e dar a sensação de que são novas barreiras
      }

      const meio = largura / 2
      const cruzouOMeio = par.getX() + deslocamento >= meio
        && par.getX() < meio // verifica se passou o meio, retornando true ou false para cruzouOMeio
      if (cruzouOMeio) notificarPonto() // se verdadeiro, conta um ponto
      // cruzouOMeio && notificarPonto() // funciona da mesma forma que o if, mas de uma forma mais "obscura"
    })
  }
}

function Passaro(alturaJogo) { // função construtora para adicionar o pássaro e sua animação no jogo
  let voando = false // voando é a variável responsável por dizer se a tecla está presionada ou não

  this.elemento = novoElemento('img', 'passaro') // cria um elemento img com classe passaro
  this.elemento.src = '../imgs/passaro.png' // adiciona o caminho da imagem

  this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
  // Exemplo abaixo feito no próprio Browser
  // "100px".split('px')
  //     (2)["100", ""] // retorna um array, divindo a string em 2 posições
  // "100px".split('px')[0] // pega a posição 0 desse array gerado
  //     "100"
  // parseInt("100px".split('px')[0]) // converte o que era uma string em um int, para manipular o valor
  //     100
  this.setY = y => this.elemento.style.bottom = `${y}px` // função que altera a posição y

  window.onkeydown = e => voando = true // quando clicar em qualquer tecla e tiver pressionada, voando será setado para true
  window.onkeyup = e => voando = false // quando soltar a tecla, voando será false

  this.animar = () => { // função que fará o pássaro "voar"
      const novoY = this.getY() + (voando ? 8 : -5) // se voando for true, incrementa 8 na altura do pássaro, caso contrário, decrementa 5
      const alturaMaxima = alturaJogo - this.elemento.clientHeight  // faz o cálculo da altura máxima para que o pássaro não passe da tela
      // clientHeight é a altura do pássaro

      if (novoY <= 0) { // verificação para fazer com que o pássaro não passe do chão do jogo
          this.setY(0)
      } else if (novoY >= alturaMaxima) { // verificação para fazer com que o passaro não passe do teto do jogo
          this.setY(alturaMaxima)
      } else { // se ele não passou do teto, nem do chão, seta a posição atual dele
          this.setY(novoY)
      }
  }
  
  this.setY(alturaJogo / 2) // altura inicial do pássaro
}


// const barreiras = new Barreiras(700, 1200, 400, 400);
// const passaro = new Passaro(700)
// const areaDoJo = document.querySelector('[wm-flappy]');
// areaDoJo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJo.appendChild(par.elemento))

// setInterval(() => {
//   barreiras.animar()
//   passaro.animar() 
// }, 20)

function Progresso() { // função construtora para criar o progresso do jogo e iniciá-lo com 0 e atualizar os pontos de progresso
  this.elemento = novoElemento('span', 'progresso') // cria um elemento span com classe progresso
  
  this.atualizarPontos = pontos => { // função que irá atualizar os pontos na tela do jogo
      this.elemento.innerHTML = pontos // sempre vai adicionar no elemento (span) a nova pontuação
  }
  
  this.atualizarPontos(0) // Inicia o jogo com 0 pontos
}

// TESTE CRIAÇÃO DE ANIMAÇÃO DAS BARREIRAS/PÁSSARO
// const barreiras = new Barreiras (500, 1200, 200, 400)
// const passaro = new Passaro (500)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// // ".elemento" é o elemento DOM que de fato vai ser adicionado na página
// areaDoJogo.appendChild(new Progresso().elemento)
// areaDoJogo.appendChild(passaro.elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) { // função que verifica se há colisão
  const a = elementoA.getBoundingClientRect() // getBoundingClientRect é o retângulo associado ao elemento a
  const b = elementoB.getBoundingClientRect() // getBoundingClientRect é o retângulo associado ao elemento b
  // Com as duas constantes, podemos calcular se há ou não sobreposição nesses dois eixos, verificando dessa forma se há colisão

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
  // a.left + a.width = lado direito do elemento a em relação a left
  // se o lado direito de a em relação ao left for maior ou igual ao lado esquerdo de b em relação ao left, houve colisão horizontal!
  // b.left + b.width = lado direito do elemento b em relação ao left
  // se o lado direito de b em relação ao left for maior ou igual ao lado esquerdo de a em relação ao left , houve colisão horizontal!

  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
  // a.top + a.height = parte inferior do elemento a em relação ao topo
  // se a parte inferior de a em relação ao topo for maior que a parte superior de b em relação ao topo, houve colisão vertical!
  // b.top + b.height = parte inferior do elemento b em relação ao topo
  // se a parte inferior de b em relação ao topo for maior que a parte superior de a em relação ao topo, houve colisão vertical!

  return horizontal && vertical 
  // retorna true ou false, sendo:
  // true caso houve colisão horizontal E vertical
  // false se não houve colisão dos eixos OU de apenas um deles
}

function colidiu(passaro, barreiras) { // função responsável por testar a colisão entre o pássaro e as barreiras
  let colidiu = false // quando houver colisão, esta variável será setada para true

  barreiras.pares.forEach(parDeBarreiras => {
      if(!colidiu) { // só entra neste if se não tiver colidido ainda
          const superior = parDeBarreiras.superior.elemento
          const inferior = parDeBarreiras.inferior.elemento

          // verifica se houve colisão entre os pássaro e uma das duas barreiras de cada par de barreiras
          colidiu = estaoSobrepostos(passaro.elemento, superior)
              || estaoSobrepostos(passaro.elemento, inferior)
          // caso haja colisão com uma das barreiras do par de barreiras, variável colidiu é setada para true
      }
  })
  return colidiu  // caso o retorno seja true, o jogo "acaba" (Game Over)
}

// FUNÇÃO EM CRIAÇÃO...
function GameOver() {
  this.elemento = novoElemento('span', 'game-over')
  this.elemento.innerHTML = 'Game Over' // insere a mensagem no HTML
}

function RestartMessage() {
  this.elemento = novoElemento('span', 'restart')
  this.elemento.innerHTML = 'Press F5 to restart' // insere a mensagem no HTML
}

function FlappyBird() { // função que representará o jogo, criado todas as instâncias das funções contrutoras e adiocionando-as à área do jogo
  let pontos = 0 // variável que representa os pontos, iniciada com 0 para condizer com o ínicio do jogo

  const areaDoJogo = document.querySelector('[wm-flappy]') // seleciona a area do jogo
  const altura = areaDoJogo.clientHeight // armazena a altura da area do jogo
  const largura = areaDoJogo.clientWidth // armazena a largura da area do jogo

  const progresso = new Progresso()
  const passaro = new Passaro(altura)
  const fimJogo = new GameOver()
  const restart = new RestartMessage()
  const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos))
  // essa última função vai passar um ponto incrementado toda vez, atualizando a variável também dessa forma

  // Adicionando os elementos para o jogo...
  areaDoJogo.appendChild(progresso.elemento)
  areaDoJogo.appendChild(passaro.elemento)
  barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

  this.start = () => {
      // loop do jogo
      const temporizador = setInterval(() => {
          barreiras.animar()
          passaro.animar() 

          if (colidiu(passaro, barreiras)) { // verifica se houve colisão entre passaro e barreiras
              clearInterval(temporizador) // se houve colisão, para-se o temporizador e consequentemente o jogo
              areaDoJogo.appendChild(fimJogo.elemento) // acrescenta a mensagem de Game Over ao colidir
              areaDoJogo.appendChild(restart.elemento) // acrescenta a mensagem de Restart ao colidir
          }
      }, 20)
  }
}

new FlappyBird().start() // dá o start no jogo chamando a função start, responsável por "animar" com o temporizador