'''def soma (x,y):
    print (x + y)

soma(10,5)'''

def imc(peso,altura):
    imc = peso/(altura**2)
    if imc < 18.5:
        print('Magreza')
    elif imc >=18.5 and imc <= 24.9:
        print('Normal')
    elif imc >= 25.0 and imc <=29.9:
        print('Sobrepeso')
    elif imc >=30.0 and imc <= 39.9:
            print('Obesidade I')
    else :
        print('Obesidade II')
        return

imc(74,1.68)
