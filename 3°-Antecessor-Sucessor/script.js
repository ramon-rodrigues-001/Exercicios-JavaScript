function clicar() {
    let corpo = document.querySelector('div#res')

    let input_txt = document.querySelector('input#iinput')
    let input = Number(input_txt.value)

    corpo. innerHTML = `Antecessor: ${input - 1}  /  Atual: ${input}  /  Sucessor: ${input + 1}`
}