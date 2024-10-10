idade = input('Informe a sua idade: ')

if idade >= 18 and idade <= 59:
    print('Maior')
elif idade >= 60:
    print('Idoso')
elif idade >= 1 and idade <= 17:
    print('Menor')
else:
    print('Informe uma idade válida (A partir de 1 ano)')
