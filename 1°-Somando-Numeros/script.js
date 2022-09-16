
// Somando dois numeros

function clicar() {
    var res = document.querySelector('div#res')

    var n1_txt = document.querySelector('input#in1')
    var n2_txt = document.querySelector('input#in2')
    var n1 = Number(n1_txt.value)
    var n2 = Number(n2_txt.value)

    
    if (n1_txt.value == '' || n2_txt.value == '') {
        alert('Valor adicionar um valor')
    }
    else {
        var escolha = document.querySelector('select#iescolha')
        
        if (escolha.value == 'somar') {
            res.innerHTML = `${n1 + n2}`
        }
        else if (escolha.value == 'subitrair') {
            res.innerHTML = `${n1 - n2}`
        }
        else if (escolha.value == 'multiplicar') {
            res.innerHTML = `${n1 * n2}`
        }
        else if (escolha.value == 'dividir') {
            res.innerHTML = `${(n1 / n2).toFixed(2)}`
        }
    }

}

// Desafio encerrado com SUCESSO
var nome = 'Ramon Rodrigues'