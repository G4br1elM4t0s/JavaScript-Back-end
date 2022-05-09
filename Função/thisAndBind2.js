function pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

//ou seja sem o bind(this) o temporizador não aponta 
//a idade sempre ficara com o NaN repitindo
//o papel do self sever para apontar diretamente para
//a função de pessoa pois ela esta sendo executada em pessoa
// gambiarra utilizada para apontar para o objeto desejado
new pessoa
