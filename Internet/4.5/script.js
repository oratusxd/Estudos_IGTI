function maior(a,b,c){
  if (a > b && a>c){
    window.document.write(a);
  }else if(b > a && b > c){  
    window.document.write(b);
  } 
  else {
    window.document.write(c);
  }
}
function menor(a,b,c){
  var r = (a < b && a < c) ? a :( b < a && b < c) ?b : c;
  window.document.write(r);
}
function formataMes(mes){
  switch(mes){  
    case 1:
  console.log ('Janeiro');
  break;
    case 2:
  console.log ('Fevereiro');
  break;
    case 3:
    return 'Março';
    case 4:
    return 'Abril';
    case 5:
    return 'Maio';
    case 6:
    return 'Junho';
    case 7:
    return 'Julho';
    case 8:
    return 'Agosto';
    case 9:
    return 'Setembro'; 
    case 10:
    return 'Outubro';
    case 11:
    return 'Novembro';
    case 12:
    return 'Dezembro';
    default:
    return "Não existe ainda";
  }

}