//Tipos primitivos
var nNumber = 5.78;
var vString ='Abacaxi';
var vBolean = true;
//document.write(typeof(nNumber)); // ele diz o tipo primitivo da minha variavel
var aluno1 = {
matricula:762575,
nome:'Danilo Ferreira',
curso:'Bootcamp Front End',
ativo:true
};
window.document.write(aluno1.nome);
aluno1.dataNascimento='03/07/1985';
window.document.write(aluno1.dataNascimento);
delete aluno1.dataNascimento;
window.document.write(aluno1.dataNascimento);
var x;
var y = null;
//Array
var frutas =['Banana','Laranaja','Maça'];
window.document.write(frutas[0]); // Lembrando que o indice começa do 0 como de outras linguagens
frutas= [ ];
frutas.push(abacaxi);
window.document.write(frutas[3]);