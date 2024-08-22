let parImpar = prompt("Digite o numero para ver se é par ou impar:")
converterParParaImpar(parImpar)


function converterParParaImpar (numero) {
    let resultado
    if (numero % 2 == 0) {
        resultado = "par"
    }else {
        resultado = "impar"
    }
    console.log(`O numero ${numero} é ${resultado}`)
}


