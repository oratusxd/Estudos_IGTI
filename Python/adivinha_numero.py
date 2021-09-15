import random
# Quero limitar a quantidade de tentativas
n = random.randint(1,99) # Ele tá determinando os parametros que o random vai gerar de 1 a 99
adivinhe = int(input('Tente adivinha um número entre 1 e 99'))

while n!= adivinhe:
    print()
    if adivinhe < n:
        print('O número é maior do que este')
        adivinhe = int(input('Tente outra vez:'))
    elif adivinhe > n:
        print('O número é maior do que esse')
        adivinhe = int(input('Tente outra vez:'))
    else:
        print('VocÊ acertou!')
        break
    print()
