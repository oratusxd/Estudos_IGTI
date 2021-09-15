import math
usuario = int (input('Para gerar a tabuada até 10, adicione o valor ao lado: '))
def tabuada (usuario):
    for i in range (0,11):
        res = str(usuario * i)
        i+=1
        print(usuario,"x", i , '=', res)

    

tabuada(usuario)