#Listas/array
frutas = ['banana','laranja', 'abacate', 'melancia', 'caju','abacaxi']
# Indices    0    ,    1    ,     2    ,      3    ,   4   ,    5   
saldo_alunos = [500.00,1200.00,1000.00,600.00,50000,00]
num_pacientes = [25,36,50,45,22,33,89]
print(frutas)
print(saldo_alunos)
print(num_pacientes) # Lembrando que a lista pode acomodar qualquer tipo de dado ;
frutas_dup = ['banana','laranja', 'abacate', 'melancia', 'caju','abacaxi','banana','laranja', 'abacate']
print(frutas_dup)
print(len(frutas)) # comando pra dizer a quantidade de dados na lista
print(len(num_pacientes))
print(len(frutas_dup))
variados = [10,2.5,'Python']
print (variados)
print(frutas[2]) # Acessando dados de uma lista
frutas.append('morango') # Adicionando itens na lista
print (frutas)
print(frutas[-1])
saldo_alunos.extend(num_pacientes) # Unindo listas
print(saldo_alunos)

