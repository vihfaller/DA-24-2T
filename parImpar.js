function converterParParaImpar (numero) {
    if (numero % 2 == 0) {
        return numero + 1;
    }else {
        return numero;
    }
}

let parImpar = converterParParaImpar(4)

// let numeroPar = 8;
// let numeroImpar = converterParParaImpar (numeroPar);

console.log(parImpar); 
