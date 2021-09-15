function Retangulo (altura,largura){
  this.altura=altura;
  this.largura=largura;
  this.area=function(){
    return this.altura *this.largura;
  }
  }
var r1 = new Retangulo(3,4)
var r2 = new Retangulo(7,2)
function RetanguloV2 (altura,largura){
  this.altura=altura;
  this.largura=largura;
  }
  RetanguloV2.prototype.area = function(){ // ele coloca a propriedade área está em todas as funções Retangulo v2
return this.altura*this.largura
  }
  var r3 = new RetanguloV2(3,4)
var r4 = new RetanguloV2(7,2)
//o uso to this vai depender da forma como o objeto tá sendo chamado- se for ou não global
