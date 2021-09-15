function soma (a,b){
  return a + b;
}

function Retangulo (altura,largura){
  this.altura=altura;
  this.largura=largura;
  this.area=function(){
    return this.altura * this.largura;
  }
  }
//Como Arrow function
var somav2 = (a, b) => a + b;

function Retangulo (altura,largura){
  this.altura=altura;
  this.largura=largura;
  this.area= ()=> this.altura * this.largura;
  
  } // o lugar de declaração da arrow function vai influenciar diretamente no funcionamento do código
  var imprimeMensagem = ()=> console.log("teste")