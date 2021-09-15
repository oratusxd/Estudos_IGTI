# Elif
'''idade = int(input('Digite a sua idade: ')) # comando para o usuario escrever no console, só que a variavel por padrão vai sair como string, por isso que precisamos declarar ela pro tipo que queremos
if idade >=18 :
     print ('Você já pode dirigir')
elif idade < 18 :
    print('Você não pode dirigir')
'''
exercicio = int(input('Quantos minutos você se exercita por dia: '))
if exercicio < 30 :
    print('Você deveria se exercitar mais')
elif exercicio >=30 and exercicio <=60:
    print('Você está no caminho certo')
elif exercicio >=60 and exercicio <=120:
    print('Você é uma (a) atleta')
else:
    print('Uau, você se exercita pra caraio')