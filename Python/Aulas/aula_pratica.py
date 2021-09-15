#Programação orientada a objetos
#Tudo em python é objeto ( que tem propósitos e que o método/função é o caminho para se chegar no propósito)
lista = [1,2,3,4,5,6,7,8,9,10]
print (type(lista)) # Uma forma de saber se é uma função, você vai colocar parenteses ( em textos e sim tem excessões)
print (lista)
x= 42
print(x)
print(type(x))
y = 4.34
print(type(y))

def f(x):
    return x + 1

print(type(x))

import math # ele é uma forma de importat pacotes
print(type(math))

x = [3,6,9]
y = [45,"abc"]
print(x[1])

x = [3,6,9]
x[1] = 99    # O método x[1] adiciona o valor em uma posição expecífica (mas, ele substitui o valor velho, pelo novo)
x.append (42) # lembre-se que o append tem a função de adicionar o valor que a gente quer no final da lista
print (x)

y = [45,"abc"]
last = y.pop() # Imprime o ultimo valor de um conjunto de valores indexados
print(last)

# Como que cria classes-> Ela se divide no cabeçalho e corpo
class animal :  #Cabeçalho
    pass        # Corpo ; O pass serve pra continuar a classe/executar a classe- é bem mais complexo ok
if__name__ = '__main__' #
x = animal()
y = animal()
y2 = y
print  (y==y2)
print  (y==x)

class animal :
    pass
x = animal()
y = animal()
x.name= 'Gato'
x.born_year ='2020'
x.pelo = 'branco'

print (x.name)
print(x.born_year)
print(x.pelo)

x.name= 'Cachorro'
x.born_year ='2019'
x.pelo = 'preto'

print (x.name)
print(x.born_year)
print(x.pelo)

'''print(x.__dict__)


print(list.__dict__)


print(tuple.__dict__)


print(dict.__dict__)


print(set.__dict__)'''

 #Criando funções para o gato dizer oi
def oi(obj):
     print('Miau. Eu sou gato ' + obj.name + ' !')
class animal:
         pass
x = animal()
x.name='Bilbo'
oi(x)

def miau(obj):  # def de definição, ele define a função
    print('Miau')
def ronronar(obj):
    print('prprprprp')
class animal :
    miar = miau
    ronronar = ronronar
x = animal()
x.name = 'Bilbo'
animal.miar(x) 
animal.ronronar(x) 

