
var pessoa = {
nome : "João",
idade : 40,
telefone: "(99)99999-9999",
temCarro:true,
animaisDeEstimacao:[
    "Totó",
    "Bo",
],
pai:{
nome:"Jose",
idade:68,
},
//mae:"" ,
}
//console.log(pessoa)
//console.log(pessoa.nome)//Colocar . eu posso selecionar um objeto expecífico do meu Json
 // Eu posso colocar um objeto dentro de outro objeto
 pessoa.animaisDeEstimacao.push("Billy")
 pessoa.nome+= " Silva"
 pessoa.mae= {
     nome:  "Maria",
     idade:68
 },

 /*//console.log(pessoa)
salvarDadosPessoa(pessoa)

 function salvarDadosPessoa(pessoa){

console.log(pessoa);0
 }
*/

console.log(JSON.stringify(pessoa))// JSON.stringify transforma de JSON para String
//JSON.parse()// Converte de String para Json