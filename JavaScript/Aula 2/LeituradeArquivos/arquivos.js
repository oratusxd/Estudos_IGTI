var fs = require("fs")
var nomeArquivo="meuAquivo.txt"
/*var x = null 
if ( x!==null){
    console.log("x tem valor")
} else {
    console.log("x não tem valor")
}*/
fs.writeFile(nomeArquivo, "Um texto qualquer,", function (err){
    if (err!==null){
    console.log(err)
} else {
    console.log("arquivo escrito com sucesso")
    fs.appendFile(nomeArquivo,"\nnova linha no texto",function(err){
        if (err){
            console.log(err)
        } else {
            fs.readFile(nomeArquivo, "utf-8", function(err,data) {
                if (err){
                    console.log(err)
                } else {
                console.log(data)
            }
            }
                )
        }
    })
  
 
}
}
)

console.log("2")