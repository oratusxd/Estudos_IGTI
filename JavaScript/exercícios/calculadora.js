console.log(process.argv)
var operação=process.argv[2]

var valor1 = Number(process.argv[3])
var valor2 = Number(process.argv[4])
var resultado = 0
if ( operação === "soma"){
    resultado = valor1+valor2;
}    if (operação==="subtracao"){
    resultado = valor1-valor2
} if (operação==="Multiplicacao")
{
    resultado= valor1*valor2
} if (operação==="Divisao"){
    resultado= valor1/valor2
} if ( operação==="Resto"){
    resultado= valor1%valor2
} 
console.log(`O resultado da ${operação} é ${resultado}.`)