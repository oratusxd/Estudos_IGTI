var carros =  [ "Gol", "Palio","Uno","Sandero"];

var carro = carros.pop()// Ele seleciona o ultimo valor + remove da array (você pode colocar ele em uma variavel se quiser)
//console.log(carro)
//console.log(carros)
console.log(carros[carros.length-1])// Ele seleciona o ultimo valor da array sem remover da array

var x = carros.push("Ford Ka") // Ele adiciona o elemento no fim da array e retorna seu novo tamanho
/*console.log(carros)
console.log(x)*/

var carro= carros.shift()// Ele seleciona o primeiro valor + remove da array (você pode colocar ele em uma variavel se quiser)
/*console.log(carros)
console.log(carro)*/
x= carros.unshift("Onix"); // Ele adiciona o dado no início da array  e retorna seu novo tamanho- é um push ao contrário
//console.log(carros)
//console.log(x)

carros [2] = "Novo Uno"// podemos atualizar o indice informado- nesse caso o indice 2 era Uno e agora virou o Novo Uno
//console.log(carros)
/*delete carros [2] // Exclui o indice selecionado, mas não adiciona nada no lugar
console.log(carros)*/
/*
Primeiro parametro vai deteterminar a posição inicial;
Segundo parametro: Quantos elementos serão removidos apartir da posição inicial
Terceiro em diante: Elementos que serão removiso a partir da posição inicial
*/
carros.splice(2 , 0 , "HRV" , "Creta") 
console.log(carros)
carros.splice(2 , 1) // Eu posso remover elementos do array e não deixa um buraco nela onde o primeiro parametro detemrina o inicio e o segundo detemrina o fim ( não incluso)
console.log(carros)

carrosAntigos=["Brasilia", "Monza", "Fusca"]
carrosAntigos2=["Corcel","Chevette"]
var todosCarros=carros.concat(carrosAntigos,carrosAntigos2)
console.log(todosCarros)

var novoArray = todosCarros.slice(1)
console.log(todosCarros)
console.log(novoArray)

var novoArray2 = todosCarros.slice(2,5)
console.log(todosCarros)
console.log(novoArray2)