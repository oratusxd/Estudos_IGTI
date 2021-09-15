#Tuples
frutas = ('banana','laranja', 'abacate', 'melancia', 'caju','abacaxi')
# Indices    0    ,    1    ,     2    ,      3    ,   4   ,    5   
saldo_alunos = (500.00,1200.00,1000.00,600.00,50000,00)
num_pacientes = (25,36,50,45,22,33,89)
print(frutas[1])
print(frutas[1:4]) # selecionando intervalo de valores, lembrando que o 4 não vai ser selecionado, e até o 4
saldo_alunos_dup = (500.00,1200.00,1000.00,600.00,50000,00,500.00,1200.00,1000.00,600.00,50000,00)
tupla_junto = frutas + num_pacientes # Contatenando as Tuples, onde não é necessário o uso de funções para unir as tuples ( algo que é diferente da List)
print(tupla_junto)
print (type(tupla_junto))
num_pacientes_x = (25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,
                  45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,
                  45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,
                  45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,45,22,33,89,25,36,50,
                  45,22,33,89,25,36,50,45,22,33,89)
print(num_pacientes_x.count(45)) # como saber quantas vezes um determinado valor aparece repetido
