const anonimo = process.argv.indexOf('-a') !== -1


if(anonimo){
    process.stdout.write('Falaaa DevAnonimo!!! \n');
    process.exit();

}else{
    process.stdout.write('Informe o seu nome: ');
    process.stdout.on('data',data=>{
        const nome = data.toSring().replace('\n', '');

        process.stdout.write(`Fala meu mano ${nome}`);
        process.exit()
    })
}