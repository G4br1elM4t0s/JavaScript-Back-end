var valores= ["4","Olá Mundo", "Tchau Mundo", "1 mundo", "Primeiro mundo"]


// let valor2 = teste[3].split(" ")
// let aux = []
// let gamb = valor2[0]
// aux = valor2
// valor2[[1],[0]] = aux[[0],[1]]
// valor2[1] = gamb
// valor2[0,1]
 
// gamb = valor2[0] +  " " + valor2[1]

// console.log(gamb);

for(let i = 0; i < valores.length; i++){
  if(!isNaN(valores[i])){
    valores[i] = "Matematica"
  }else if(isNaN(valores[i])){
    var valor = valores[i].split(" ")
    if (valor.length> 1){
      for(let j = 0; j < valor.length; j++){
        
        if(isNaN(valor[0]||valor[1])){
          let aux = valor[1] + " " + valor[0];
          valores[i] = aux
         
        }else{  
          valores[i] = "Matematica"

        }
      }
    }
  }
}

console.log(valores);

