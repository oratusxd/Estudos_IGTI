function Retangulo (altura,largura){
  this.altura=altura;
  this.largura=largura;
  this.area=calculaArea;

  }
  function calculaArea(){
    return this.altura *this.largura
  }
//o uso to this vai depender da forma como o objeto tá sendo chamado- se for ou não global
