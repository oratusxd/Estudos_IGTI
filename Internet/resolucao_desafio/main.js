const rolesEl = document.getElementById("roles") ;

fetchRoles()
function fetchRoles(){
  fetch("http://localhost:3000/roles").then((resp) =>{
   if (resp.ok){
     resp.json().then((roles)=>{
      for (const roles of roles){ // A tendencia é usarmos o let=> Pode usar o for e roles.lenght
       const labelEl= document.createElement("label");
       const checkboxEl= document.createElement("input");
       checkboxEl.type = "checkbox";
       labelEl.append(checkboxEl,role.name);
      rolesEl.appendChild(labelEl)
       
      }
     // <label><input type ="checkbox">Database Administrator</label>
     }) // vai retornar promisse 
   }
    
  });

}

fetchEmployees()
fetchJson("http://localhost:3000/employees")
function fetchEmployees(){
  fetch("http://localhost:3000/employees").then((resp) =>{
   if (resp.ok){
     
       
      }
    
   

}



  function fetchJson(url){
  fetch(url).then((resp) =>{
   if (resp.ok){
     return resp.json();
       
      }
     // <label><input type ="checkbox">Database Administrator</label>
     }) // vai retornar promisse 
   }
    
  });

}