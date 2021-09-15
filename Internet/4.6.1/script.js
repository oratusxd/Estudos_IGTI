
function Palindromo(){
var pal = document.getElementById("Palindromo").value;
var res=document.getElementById("res")
 for ( var i = 0 , j = pal.length -1; i < j; i++,j-- )
{
if (pal.charAt(i) != pal.charAt(j)){
  res.innerHTML= `A palavra ${pal} não é um palíndromo`;
} 
else{
  res.innerHTML= `A palavra ${pal} é um palíndromo`;
}
} }