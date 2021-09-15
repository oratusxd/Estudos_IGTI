var readline= require("readline");
var r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})
var numaleatorio= Math.round(Math.random() *100)
if (numaleatorio === 0){
    numaleatorio === 1
}
var numTentativa = 10
console.log(numaleatorio)
pergunta ()
function pergunta (){
    r1.question("Digite um número: ", function(numero){
        numero= Number(numero)
         numTentativa --
         if (numero === numaleatorio){
             console.log("Parabens, você acertou o número");
             r1.close();
         } else if (numTentativa == 0){
             console.log("Você não descobriu o número em 10 tentativas");
             r1.close();
         } else if ( numero> numaleatorio){
             console.log(`Número errado, você ainda tem ${numTentativa} tentativas.O número é maior do que o informado`)
             pergunta ();
            } 
         else {
         console.log(`Número errado, você ainda tem ${numTentativa} tentativas.O número é menor do que o informado`)
         pergunta ()
        }
 
     })
}
