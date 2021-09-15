#Sets: Seria a mais restrita do python
cidades = {'Belo Horizonte', 'Manaus' , 'Fortaleza', 
'Natal'}
print(type(cidades))
print(cidades) # Na hora de printar, os dados ficam todos desordenados e se você colocar um valor duplicado, eles não serão armazenados
cidades_repete = {'Belo Horizonte', 'Manaus' , 'Fortaleza', 
'Natal','Belo Horizonte', 'Manaus' , 'Fortaleza', 'Natal','Belo Horizonte'
, 'Manaus' , 'Fortaleza', 'Natal'}
print(cidades_repete)
print('Manaus' in cidades) # Checando valores em Set
print('Recife' in cidades)
cidades.add('Porto Alegre') # Como no Set os dados ficam desordenados, não tem como saber se o dado vai ficar no final ou não
print(cidades)
cidades_2 = {'Recife','Salvador', 'Campo Grande'}
cidades.update(cidades_2) # Como unir Sets diferentesd
print(cidades)