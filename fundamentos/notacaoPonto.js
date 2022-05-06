console.log(Math.ceil(6.2));


const obj1 = {}
obj1.name = 'Caneta'

console.log(obj1.name);

function Obj(name){
    this.name = name;
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira Gamer')
const obj3 = new Obj('Mesa Gamer')
console.log(obj2.name);
console.log(obj3.name);
obj3.exec()
obj2.exec()