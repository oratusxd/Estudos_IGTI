/*arara ou Ana é escrito da mesma forma ao contrário
se as palavras tiverem uma leitura diferente ao 
ler da esquerda para direita e vice versa = lascou-se
////////////////
// O for tem 3 etapas. a inicialização do contador(executado só na primeira vez)
//, comparação ( é o teste lógico que determina se o código vai ser executado) e o incremento
//console.log(palavra[i]) // lembre-se que na array o contador começa do 0 e não do 1  
// o .length escreve o tamanho da array em questão. ^C para o infinity (se tá ligado do que eu to falando)                       
/////////////////   
 for (var i = 0 ; i < palavra.length; i++) 
      { palavraInvertida= palavraInvertida + palavra[i];           
           }
 console.log(palavraInvertida)    
 tenho que fazer um For que leia a palavra ao contrário
 0123456
 celular
 6543210
 ralulec
  */
var palavra = "Barara";//
var palavraInvertida = "";

 for (var i= palavra.length-1 ; i >= 0; i--){ // palavra.length vai falar exatamente o tamanho da informação, já o -1 vai forçar 
    palavraInvertida= palavraInvertida+palavra[i];  
 //   console.log(palavraInvertida)            
}
//console.log(palavraInvertida)
  if (palavra == palavraInvertida){
     return  console.log(`A palavra ${palavra} é um palíndromo`)
  } 
  else (palavra !== palavraInvertida) 
  {
  console.log(" B A N I D O")
  }

