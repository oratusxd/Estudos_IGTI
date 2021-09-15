
var n= 215
b1=2
for (var c = b1 ; c<=n ;c++)
{
    if ((n % c !==0)||( n==n/c)) {  
        
        return console.log(`O número ${n} é primo`)
     } 
     else {
        return console.log(`O número ${n} não é primo`)
     }
     }