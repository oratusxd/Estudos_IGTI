var fs = require("fs")
var nomeArquivo="carros.json"
var carros = [ "Gol", "Palio", "Uno", "Celta"]
var concessaria={
nome:"Concessionaria XYZ",
carros,
}
fs.writeFile(nomeArquivo, JSON.stringify(concessaria), function(err){
    if (err){
console.log(err)
    } else {
        fs.readFile(nomeArquivo,"utf-8",function(err,data){
            if (err){
                console.log(err)
            } else {
                console.log(data)
                var obj = JSON.parse(data) // transforma de JSON para String
               obj.carros.push("HRV")
                console.log(obj)
                fs.writeFile(nomeArquivo,JSON.stringify(obj), function(err){
                    if (err){
                        console.log(err)
                    } 
                       


                })
            }



        })
    }
})