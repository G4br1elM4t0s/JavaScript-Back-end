function Calcfatorial(numero){
    if(numero == 0){
        return 1;
    }else{
        return numero * Calcfatorial(numero - 1);
    }
}


console.log(Calcfatorial(5));


function fatorial(number){

    var valorFatorial = 1;
    for(let i=0;i<number;i++){
        valorFatorial = valorFatorial * (number - i);
        
    }

    console.log(`A fatorial do valor posto é ${valorFatorial}`);
    
}

fatorial(5)
fatorial(0)
console.log();