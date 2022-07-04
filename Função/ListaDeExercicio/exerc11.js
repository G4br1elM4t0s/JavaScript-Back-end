function ano(a){
    if(a<=0){
        return false;
    }else if(a % 400 ==0){
        return true;
    }else if(a % 100 == 0){
        return false;
    }else if(a % 4){
        return true;
    }else{
        false
    }
}


console.log(ano(2022));
console.log(ano(2003));
console.log(ano(0));
console.log(ano(1));
console.log(ano(400));