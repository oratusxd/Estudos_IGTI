'''num = 1
while num < 10 :
    print(num)
    num+=1
num = 1
while num < 10 :
        print (num)
        if num == 6:
            break
        num += 1'''
num = 0
while num < 21:
    num += 1
    if num == 12 : # Ele tá pulando o valor 12, e depois o código continua
        continue
    print (num)