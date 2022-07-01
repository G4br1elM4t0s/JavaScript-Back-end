Object.prototype.attr0 = '0'; //apenas exemplo... 
const avo ={ attr1: "A"}
const pai= {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr3,filho.attr2,filho.attr1,filho.attr0);


const carro = {
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta < this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;

        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMax}km/h`;

    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo,carro);

console.log(ferrari);
console.log(volvo.status());


ferrari.acelerarMais(300);
console.log(ferrari.status());


volvo.acelerarMais(300)
console.log(volvo.status());