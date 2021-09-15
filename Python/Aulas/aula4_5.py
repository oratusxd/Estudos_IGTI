# Dicitionary
cod_uf = {
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia'    
}
print(type(cod_uf))
print(cod_uf) # Os dados só são ordenados pós python 3.7- LEMBRE-SE DISSO CARAIO
print(cod_uf.values()) # Pegando os valores do nosso dicionario;
joao = {                                  #Os valores não se repetem, porque eles são correspondentes
    'cabelo': 'preto',
    'olhos' : 'azuis',
}
cod_uf_dup = {
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia',    
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia', 
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia',    
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia', 
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia',    
21: 'Maranhão',
22: 'Piauí',
23: 'Ceará',
24: 'Rio Grande do Norte',
25: 'Paraíba',
26: 'Pernambuco',
27: 'Alagoas',
28: 'Sergipe',
29: 'Bahia', 
}

print(cod_uf_dup)
print(cod_uf.get(29)) # Acessando valores

print(cod_uf.keys()) # Como acessar somente os numeros chaves

cod_uf[30] = 'Estado Vira-lata Caramelo' # Adicionando novos valores
print(cod_uf)




