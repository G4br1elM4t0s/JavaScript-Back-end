let compararComThis =  function(param){
    console.log(this === param)
}

compararComThis(global);

const obj = {}

compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let compararComThisArrow = param => console.log(this ===param);
compararComThisArrow(global)
compararComThisArrow(module.exports)


compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj)
compararComThisArrow(module.exports)