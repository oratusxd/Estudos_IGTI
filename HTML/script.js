function clickBotao(){
    //DOM- Document object Model
    alert('Hello World') 
    document.getElementById("paragrafo2").innerHTML="Texto alterado com sucesso"  
//document.getElementById("paragrafo2").style.display="none"

for (var i=0;i<document.getElementsByClassName("paragrafo").length;i++){
    document.getElementsByClassName("paragrafo")[i].style.color="blue"
    document.getElementsByClassName("paragrafo")[i].style.color="red"
}
}
function clickBotao2(){
    //DOM- Document object Model
document.getElementById("paragrafo2").style.display="block"
var botoes = document.getElementsByTagName("button")
var i = 0
while (i<botoes.length){
    botoes[i].style.fontSize="20px"
    i++;
}
}
function ligarLampada(){
document.getElementById("lampada").src = "lampada_ligada.png"
}
function desligarLampada(){
    document.getElementById("lampada").src = "lampa_desligada.png"
    }
    var quantidaElementos= 0
    function adicionarElemento(){
        var elemento= document.createElement("P")
        elemento.innerHTML = `Elemento ${quantidaElementos}`
        quantidaElementos++;
        document.getElementById("div-elementos").appendChild(elemento)
    }
    function removerElemento(){
        var filhos = document.getElementById("div-elementos").childNodes
        var size = filhos.length;
        for (var i = 0; i<size;i++){
            document.getElementById("div-elementos").removeChild(filhos[0]);
        }
    }