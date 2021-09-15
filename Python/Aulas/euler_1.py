from numpy.core.fromnumeric import sort
import numpy

a = [3,5]
la = [*range(0,1001,a[-1])]
#print(lista)
la1 = [*range(0,1001,a[0])]
#print(lista1)
s = sort(la+la1)
l = []
def remove_repetidos(s):
    l = []
    for i in s:
        if i not in l:
            l.append(i)
    l.sort()
    return l

lista = remove_repetidos(s)
def somar_elementos(lista):
  soma = list[0]
  for i in lista:
      if i<1000:
        soma += i
        tamanhp=((soma))
        respota=soma[tamanhp-1]
        print((respota))



somar_elementos(lista)

