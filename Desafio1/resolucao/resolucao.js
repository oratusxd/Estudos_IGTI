var funcionarios =[
    {
        "nome": "Joao Cardoso Barbosa",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Rebeca Costa Oliveira",
        "salario": 2000,
        "setor": "Produção"
    },
    {
        "nome": "Ana Azevedo Alves",
        "salario": 5000,
        "setor": "Comercial"
    },
    {
        "nome": "Marisa Dias Barbosa",
        "salario": 6500,
        "setor": "Produção"
    },
    {
        "nome": "Igor Cunha Lima",
        "salario": 1200,
        "setor": "Comercial"
    },
    {
        "nome": "Sarah Sousa Costa",
        "salario": 1500,
        "setor": "Comercial"
    },
    {
        "nome": "Giovanna Santos Araujo",
        "salario": 2500,
        "setor": "Produção"
    },                           
    {
        "nome": "Otávio Souza Cardoso",
        "salario": 3500,
        "setor": "Administrativo"
    },
    {
        "nome": "Leonardo Souza Lima",
        "salario": 1500,
        "setor": "Produção"
    },
    {
        "nome": "Nicolash Cavalcanti Fernandes",
        "salario": 4000,
        "setor": "Comercial"
    },                             
    {
        "nome": "Matheus Ribeiro Rocha",
        "salario": 4500,
        "setor": "Administrativo"
    },
    {
        "nome": "Vitor Ribeiro Barbosa",
        "salario": 3500,
        "setor": "Produção"
    },
    {
        "nome": "Carlos Oliveira Rodrigues",
        "salario": 7000,
        "setor": "Administrativo"
    },
    {
        "nome": "Mateus Pinto Pereira",
        "salario": 5500,
        "setor": "Administrativo"
    },
    {
        "nome": "Vinícius Pereira Castro",
        "salario": 3500,
        "setor": "Comercial"
    },      
{
        "nome": "Gabriela Souza Pereira",
        "salario": 2500,
        "setor": "Administrativo"
    },
    {
        "nome": "Emily Melo Cavalcanti",
        "salario": 2000,
        "setor": "Produção"
    },
    {
        "nome": "Luís Carvalho Silva",
        "salario": 1500,
        "setor": "Comercial"
    },
    {
        "nome": "José Melo Araujo",
        "salario": 4000,
        "setor": "Produção"
    },
    {
        "nome": "Manuela Ferreira Cardoso",
        "salario": 6000,
        "setor": "Comercial"
    },
    {
        "nome": "Anna Gomes Rodrigues",
        "salario": 7000,
        "setor": "Comercial"
    },
    {
        "nome": "Anna Sousa Goncalves",
        "salario": 5000,
        "setor": "Produção"
    },                           
    {
        "nome": "Gabrielle Araujo Souza",
        "salario": 7500,
        "setor": "Administrativo"
    },
    {
        "nome": "Maria Cavalcanti Rocha",
        "salario": 3000,
        "setor": "Produção"
    },
    {
        "nome": "Luis Lima Rocha",
        "salario": 2000,
        "setor": "Comercial"
    },                             
    {
        "nome": "Rodrigo Correia Souza",
        "salario": 3500,
        "setor": "Administrativo"
    },
    {
        "nome": "Guilherme Silva Cavalcanti",
        "salario": 5500,
        "setor": "Produção"
    },
    {
        "nome": "Nicole Costa Pinto",
        "salario": 2000,
        "setor": "Administrativo"
    },
    {
        "nome": "Emilly Gomes Araujo",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Thaís Sousa Carvalho",
        "salario": 4000,
        "setor": "Comercial"
    },
{
        "nome": "Vitor Oliveira Sousa",
        "salario": 5500,
        "setor": "Administrativo"
    },
    {
        "nome": "José Sousa Lima",
        "salario": 7500,
        "setor": "Produção"
    },
    {
        "nome": "Mateus Barros Carvalho",
        "salario": 8000,
        "setor": "Comercial"
    },
    {
        "nome": "Júlio Cavalcanti Martins",
        "salario": 5000,
        "setor": "Produção"
    },
    {
        "nome": "Antônio Almeida Goncalves",
        "salario": 2000,
        "setor": "Comercial"
    },
    {
        "nome": "Ana Castro Dias",
        "salario": 9500,
        "setor": "Comercial"
    },
    {
        "nome": "Rafaela Cunha Santos",
        "salario": 2000,
        "setor": "Produção"
    },                           
    {
        "nome": "Giovanna Barros Santos",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Gabrielly Martins Alves",
        "salario": 4000,
        "setor": "Produção"
    },
    {
        "nome": "Otávio Araujo Costa",
        "salario": 3500,
        "setor": "Comercial"
    },                             
    {
        "nome": "Bruna Lima Azevedo",
        "salario": 3000,
        "setor": "Administrativo"
    },
    {
        "nome": "Rebeca Ferreira Oliveira",
        "salario": 2500,
        "setor": "Produção"
    },
    {
        "nome": "Breno Sousa Rocha",
        "salario": 6000,
        "setor": "Administrativo"
    },
    {
        "nome": "Vitória Castro Almeida",
        "salario": 5000,
        "setor": "Administrativo"
    },
    {
        "nome": "Marina Goncalves Rodrigues",
        "salario": 4000,
        "setor": "Comercial"
    }
]
var fs = require("fs")
fs.readFile("funcionarios.json","utf-8", function (err, data){
  var lista=  JSON.parse(data)
 // console.log(data)

})
//console.log(dados)
maiorSalario()
function maiorSalario(){
var maiorSalario = 0
var nome= "";
for ( var i = 0; i<funcionarios.length; i++){
    if (funcionarios[i].salario> maiorSalario){
        nome = funcionarios[i].nome;
        maiorSalario= funcionarios[i].salario
    }
}
return nome
} 
function menorSalario(){
var menorSalario=999999;
var nome ="";
for (var i = 0 ; i < funcionarios.length ; i++ ) {
    if ( funcionarios[i].salario < menorSalario){
        nome = funcionarios[i].nome
        menorSalario=funcionarios[i].salario
    }
}
return nome;
}
mediaSalario()
function mediaSalario(){
    var total = 0
for (var i =0 ; i<funcionarios.length;i++){
    total = total + funcionarios[i].salario
}
var media=total/funcionarios.length
return media // precisa escrever o return para definir o valor a ser escrito pelo console.log- depende do caso ele pode ser necessário
}
var setor = ["Administrativo","Produção","Comercial"]
function maiorSalarioSetor(setor){
    var maiorSalario = 0
    var nome= "";
    for ( var i = 0; i<funcionarios.length; i++){
        if (funcionarios[i]. setor === setor && funcionarios[i].salario> maiorSalario){
            nome = funcionarios[i].nome;
            maiorSalario= funcionarios[i].salario
        }
    }
    return nome
}
function menorSalarioSetor(setor){
    var menorSalario=999999;
    var nome ="";
    for (var i = 0 ; i < funcionarios.length ; i++ ) {
        if ( funcionarios[i]. setor === setor && funcionarios[i].salario < menorSalario){
            nome = funcionarios[i].nome
            menorSalario=funcionarios[i].salario
        }
    }
    return nome;
    }
function mediaSalarioSetor(setor){
    var total = 0
    var qtdSetor = 0;
for (var i =0 ; i<funcionarios.length;i++){
    if(funcionarios[i]. setor === setor){
        total = total + funcionarios[i].salario
        qtdSetor++ //qtdSetor=qtdSetor+1
    }

}
var media=total/qtdSetor
return media // precisa escrever o return para definir o valor a ser escrito pelo console.log- depende do caso ele pode ser necessário
}
console.log(maiorSalario());
console.log(menorSalario());
console.log(mediaSalario());
console.log(maiorSalarioSetor(setor[2]));
console.log(menorSalarioSetor(setor[2]));
console.log(mediaSalarioSetor(setor[2]));