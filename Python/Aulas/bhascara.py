import math
a = int (input('Coloque o valor para A: '))
b = int (input('Coloque o valor para B: '))
c = int (input('Coloque o valor para C: '))
def bhaskara(a,b,c): 
    delta = (b**2)- 4*a*c
    x1 = (-b + (math.pow (delta,1/2)))/(2*a)
    x2 = (-b - (math.pow (delta,1/2)))/(2*a)
    if delta >= 0 :
        print ('Boa mano, vai que é tua')
    else:  
        print ('Não tem solução real')
        return
    print(x1,x2)

bhaskara(a,b,c)