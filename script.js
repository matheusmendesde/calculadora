let tela = document.querySelector('.restela')

let ultimoCaracter = ''

function numero(num) {
    tela.innerHTML += num
    ultimoCaracter = num
}

function operador(sinal) {
    tela.innerHTML += sinal
    ultimoCaracter = sinal
}

function calcular() {
    tela.innerHTML = eval(tela.innerHTML)
}


function limpar() {
    tela.innerHTML = ''
}


function apagar() {
    tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1)
}





