function area(largura , altura){
    const area = largura * altura
    if(area> 20){
        console.log(`Valor acima do permitido: ${area}m2.`);

    }else{
        return area
    }
}

console.log(area(2,2));
console.log(area(2));
//NaN significa Not-a-Number(Não é um número)
console.log(area());
console.log(area(2,1,2,3,4,5,1,2,));
//so irá pegar os primeiro valores

console.log(area(2,15));