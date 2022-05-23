function triangulo(lado1,lado2,lado3){
    if(lado1 == lado2 && lado1 == lado3 && lado2 ==lado3){
        console.log('Esquilátero');
    }else if(lado1 ==lado2||lado2 ==lado3||lado1 ==lado3){
        console.log('Isóceles');
    }else{
        console.log('Escaleno');
    }
}

triangulo(2.3, 3, 4)
triangulo(2.3,2.3,4)
triangulo(2,2,2)