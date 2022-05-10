function Carro(velocidadeMaxima = 200, delta =5){
    //atributo privado
    //preferência do uso do let constante usar o const
    let velocidadeAtual = 0;


    
    //transformar algo para publico, ou seja 
    //algo visivel fora da fucao construtora
    //só usar o this que ela ficará visivel
    //metodo publico através da palavrinha 
    //reservada this
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;

        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }
    //metodo public
    this.frear = function(){
        if (velocidadeAtual> 0){
            velocidadeAtual -= delta;
        }else if (velocidadeAtual<0){
            velocidadeAtual = 0;
            console.log('Carro desligado');
        }else{
            console.log('morreu');
        }
    }



    //metodo publico
    this.getvelocidadeAtual = function(){
        return velocidadeAtual;
    }
}

const uno = new Carro(300, 78);
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
uno.acelerar();
console.log(uno.getvelocidadeAtual());
uno.frear();
uno.frear();
uno.frear();
uno.frear();
uno.frear();
uno.frear();
uno.frear();
console.log(uno.getvelocidadeAtual());
uno.frear();
uno.frear();
uno.frear();
console.log(uno.getvelocidadeAtual());

console.log(typeof Carro);
console.log(typeof uno);
