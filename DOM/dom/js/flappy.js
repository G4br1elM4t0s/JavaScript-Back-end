function novoElemento(tagName, className){
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

function Barreira(reversa = false){
    this.elemento = novoElemento('div','barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);
    
    this.setAltura = altura => corpo.style.height = `${altura}px`;
}

// const b = new Barreira(true);
// b.setAltura(200);
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function parDeBarreiras(altura, abertura, x){
  this.elemento =  novoElemento('div','par-de-barreiras');

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);


  //criando um parde barreiras
  this.elemento.appendChild(this.superior.elemento); //this.superior.elemento esta direcionando ao elemento da barreira
  this.elemento.appendChild(this.inferior.elemento);

  this.sortearAbertura = () =>{
      const alturaSuperior = Math.random() * (altura - abertura);
      console.log(alturaSuperior)
      const alturaInferior = altura - abertura - alturaSuperior;
      console.log(alturaInferior);
      this.superior.setAltura(alturaSuperior);
      this.inferior.setAltura(alturaInferior);
  }

  this.setX = () => this.elemento.style.left = `${x}px`;
  this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
  this.getLargura = () => this.elemento.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

// const b = new parDeBarreiras(700,400,400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

function Barreiras(altura, largura,abertura,espaco, notificarPonto){

  this.pares = [
    new parDeBarreiras(altura, abertura, largura),
    new parDeBarreiras(altura, abertura, largura + espaco),
    new parDeBarreiras(altura, abertura, largura + espaco *2),
    new parDeBarreiras(altura, abertura, largura + espaco*3)
  ]

  const deslocamento = 3
  this.animar = () =>{
    this.pares.forEach(par =>{
      par.setX(par.getX() - deslocamento);

      //quando o elemento sair da tela do jogo
      if(par.getX()< -par.getLargura()){
        par.setX(par.getX() + espaco * this.pares.length);
        par.sortearAbertura();
      }

      const meio = largura/2
      const cruzouOMeio = par.getX() + deslocamento >= meio 
        && par.getX() < meio;
      if(cruzouOMeio){
        notificarPonto()
      }

    })
  }
}

const barreiras = new Barreiras(700,1200, 400,400);
const areaDoJo = document.querySelector('[wm-flappy]');
barreiras.pares.forEach(par =>areaDoJo.appendChild(par.elemento))
setInterval(()=>{
  barreiras.animar()
},1000)