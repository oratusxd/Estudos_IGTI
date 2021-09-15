var a = 50
var b = 50
if  (a > b) {
    //condição a ser executada caso seja verdadeira 
    console.log(`${a} é maior do que ${b}`)
} 
    else if (b < a) {
    //se não, executa o código abaixo
    console.log(`${b} é maior do que ${a}`)
} 
    else {
    console.log('A e B são iguais')
} 
if (a>b){
    console.log('Executar somente se a > b')

}
console.log("Sempre executar")
var c = 40
var d = 40
if (c >= d){
    console.log('C maior ou igual a D')
}
if ( d <= c ) {
    console.log('D menor ou igual a C')
}
var e = 10
var f = "10"
if ( e===f){
    console.log('E é igual a F')
}
var g = 10
var h = 11
if (g != h){
    console.log(`${g} é diferente de ${h}`)
}
var i = 4;
var j = 4;
var k = 8;
var l = 7;
if ((i > j ) && ( l > k )) {
    console.log(`${i} é maior do que ${j}`)
} if ((i==j)|| (k===l)){
    console.log("Um dos dois eram válidos")
    if (k===5){ console.log('k igual a 5')}
}

if (!(1>2)){
    console.log('execute')
}
var fruta = "pera"
var valor =0/*
if (fruta === "banana"){
    valor= 2
} else if (fruta ==="maca"){
    valor= 3
}else if (fruta ==="abacaxi")
{
    valor = 4
} else if (fruta === "melao"){
    valor = 5
} else if (fruta ==="mamao"){
    valor = 5.50
} console.log("valor: " + valor)*/

switch(fruta){
case "banana" : 
valor = 2
break
case "maca":
    valor = 3
break
case "abacaxi":
valor = 4
break
case "melao":
valor = 5
break
case "mamao":
    valor = 5.50
    break;
default:
    valor =10
    
}
console.log(` ${fruta} tem o valor : ${valor}`)
 var x = 1
 var y = 2
 var resultado =""
/* if (x > y ){
     resultado ='X é maior do que y'
 } else if (x<y){
     resultado = 'Se não'
 }*/
 console.log(resultado)
 resultado = x>y ? 'x maior que y': 'senão';
 console.log(resultado)
