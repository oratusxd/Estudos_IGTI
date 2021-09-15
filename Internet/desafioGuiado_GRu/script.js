let employees = [];
let roles = [];
let selectedItem;
const listEl=document.querySelector("ul");
const formEl=document.querySelector("form");
const bdelete = document.getElementById("bdelete")
const bcancel = document.getElementById("bcancel")
const bsubmit = document.getElementById("bsubmit")

employeesPromise.then((resp)=>{
  resp.json().then((employees)=>{
  let table = renderTable(employees);
    document.getElementById("app").innerHTML = table;// Cuidado porque o innerhtml pode abrir vulnerabilidade do meu código, pois ele abre brecha para injetarem scripts maliciosos
  })
})

function renderTable (employees){
 let rows = employees.map(employees =>{
  return `<tr><td>${employees.id}</td><td>${employees.name}</td></tr>`
  });
  return `<table>${rows.join("")}</table>`// devemos expecificar o separador do join
}
