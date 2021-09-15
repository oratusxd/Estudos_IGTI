console.log(process.argv)
var operação=process.argv[2]

var valor1 = Number(process.argv[3])
var valor2 = Number(process.argv[4])
var resultado = 0
switch(operação){
case "soma":
    resultado = valor1+valor2
    break
    case "subtracao":
        resultado = valor1-valor2
        break
    case "Multiplicacao":
        resultado= valor1*valor2
        break
    case "Divisao":
        resultado= valor1/valor2
        break
    case "Resto":
        resultado= valor1%valor2
        break
    case "porcentagem":
        resultado= valor1* valor2/100
}
console.log(`O resultado da ${operação} é ${resultado}.`)