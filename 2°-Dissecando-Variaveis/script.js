var input_nome = 'Ramon'
var lista = ['RAMON', 'DAVI', 'PEDRO', 'DALVA', 'NÃO TENHO']


console.log('O tipo primitivo desta palavra/frase é: ' + '[' +typeof input_nome+ ']')


if (lista.indexOf(input_nome.toUpperCase()) >= 0) {
    console.log('Nossa que nome familiar kkkk')
}
else {
    console.log('Que nome feio kkkk')
}