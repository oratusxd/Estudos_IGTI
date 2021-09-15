
function IMC(){
    var peso=document.getElementById('peso').value
    var altu=document.getElementById('altura').value
    var reso=document.getElementById("res")
    var pes= Number(peso)
    var alt= Number(altu)
reso= pes/(alt*alt)
var resoArredondado=parseFloat(reso.toFixed(2))
if (resoArredondado<16.9){
    res.innerHTML=`${resoArredondado}kg/m². O seu peso está muito abaixo do ideal`
} else if (resoArredondado<18.4){
    res.innerHTML=`${resoArredondado}kg/m². O seu peso está abaixo do ideal`
} else if (resoArredondado<24.9){
    res.innerHTML=`${resoArredondado}kg/m². O seu peso está normal`
} else if ( resoArredondado<29.9){
    res.innerHTML=`${resoArredondado}kg/m². O seu peso está acima do normal`
}else if ( resoArredondado<34.9){
    res.innerHTML=`${resoArredondado}kg/m². Você está com obesidade de Grau 1`
}else if ( resoArredondado<40.0){
    res.innerHTML=`${resoArredondado}kg/m². Você está com obesidade de Grau 2`
}
 else if( resoArredondado> 40.0) {
    res.innerHTML=`${resoArredondado}kg/m². Você está com obesidade de Grau 3`
}
} function Limpar (){
    document.getElementById('peso').value='';
    document.getElementById('altura').value='';
    document.getElementById("res").value='';
}

