var res = document.querySelector('section#res')
 
 var butao = document.body.querySelector('button#butao')
 butao.addEventListener('click', function (){
    var input_txt = document.querySelector('input#input')
    var input_num = Number(input_txt.value)

    var valor_promocional = 0

    if (input_num == 0 || input_txt == '') {
        alert('Favor mecionar o valor corretamente')
    }
    else {
        if (input_num >= 1000 || input_num <= 2000) {
            valor_promocional = input_num - (input_num / (100 / 10))
        }
        else if (input_num >= 2000 || input_num <= 3000) {
            valor_promocional = input_num - (input_num / (100 / 20))
        }
        else if (input_num >= 3000) {
            valor_promocional = input_num - (input_num / (100 / 30))
        }
        res.innerHTML = `Estamos com uma promoção de fim de ano; Sua passagem de R$${input_num.toFixed(0)}.00 passara a valer: R$${valor_promocional.toFixed(0)}.00 <br>`
        res.innerHTML += `Feliz Voo!!`
    }
})
    