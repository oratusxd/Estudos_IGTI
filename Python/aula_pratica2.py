x = lambda y:y +30

print(x(10))

x(10)

x = lambda valor_1,valor_2:valor_1*valor_2
print(x(10,3))

x = lambda x,y,z: x+y+z

print(x(10,10,30))


def nome_funcao(n):
    return lambda a: a*n

multiplicador = nome_funcao(6) # Aqui seria o input
print(multiplicador(10)) # Valor fixo

lista = [1,5,4,6,8,11,3,12,50,110,132,155,81]
nova_lista = list(filter(lambda x: (x%2 == 0), lista)) # Ele filtra todos os valores pares
print(nova_lista)