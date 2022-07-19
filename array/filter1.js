const produtos =[ 
    {nome: 'Computador', preco: 2499.00, fragil: true},
    {nome: 'iPad Pro', preco: 4000, fragil:true},
    {nome: 'Copo de Vidro', preco: 10.50, fragil:true},
    {nome: 'Caneta', preco:1.25, fragil:false},
    {nome: 'Lapis', preco:0.50, fragil:false}
]


console.log(produtos.filter(function(p){
   return p.fragil === true;
}));

const caro = produtos => produtos.preco >= 500;
const fragil = produtos => produtos.fragil;


console.log(produtos.filter(caro).filter(fragil));