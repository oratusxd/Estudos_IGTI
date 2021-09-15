var carros =  [ "Gol", "Palio","Uno"];
console.log(carros)
var primeiroCarro = carros[0]
var segundoCarro = carros[1]
var terceiroCarro = carros[2]
var quartoCarro = carros[3]

console.log("Primeira posição: " +primeiroCarro)
console.log("Segunda posição: " + segundoCarro)
console.log("Terceira posição: " +terceiroCarro)
console.log("Quarta posição: " +quartoCarro)
carros[2]= "Argo"
console.log(carros[2])
console.log(terceiroCarro)

console.log("tamanho do array: " + carros.length)
console.log("ultimo elemento do array: " + carros[carros.length-1])

carros[3] = "Sandero"
console.log("ultimo elemento do array: " + carros[carros.length-1])

carros[carros.length] = "Fit"
console.log("Ultimo elemento do array: " + carros[carros.length-1])

carros [10]="Polo"
console.log(carros)
carros.push("Polo")
console.log(carros)