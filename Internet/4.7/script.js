var tn1= window.document.getElementById('txtn1')
var tn2= window.document.querySelector('input#txtn2')
var res=document.getElementById("res");
document.addEventListener('input',function(){
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
    var resultado = n1 + n2;
    res.innerHTML=`A soma entre ${n1} e ${n2} é ${resultado}`;
});
