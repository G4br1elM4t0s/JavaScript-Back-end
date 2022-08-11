const fs = require('fs');
const read = require('readline')

fs.readFile('teste.txt',(err,data)=>{
    let str = data.toString();

    // let newStr = str.split('/');

    let newStr = str.substr(1,3)

    console.log(newStr);
})