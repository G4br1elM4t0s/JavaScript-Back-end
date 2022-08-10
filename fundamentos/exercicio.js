let sum = 0;
for(let i = 0; i<5; i++){
    console.log("Start");
    console.log(i);
    for (let j = 0; j < 2; j++) {
        console.log(sum);
        console.log(j)
        sum = sum+ j + i;
        console.log("o sum no j: " + j +"é " + sum );
        continue;
        

        
    }

    console.log("stop");
}

console.log(sum)