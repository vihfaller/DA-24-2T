/*
let valor = 0 -----> valor é zero

for (let i = 0; i<5; i++){ ---------> valor de i é zero; i tem q ser menor q 5; somando o valor de i sempre com +1 
   valor += i -------> valor(0) maior ou igual a i (0)
}

console.log (valor) -------> resultado é 10.

-------> vai somando todos os numeros ate o 5, quando chegar no numero 4 irá somar todos e resultará em 10
*/

/*
const lista = [10,11,12,15,18,19,21,23,25,27,30]
for (let numero of lista){
    if (numero >18){
        console.log (numero)
    }
}
------> vai ser impresso os numeros da array após o numero 18.
------> sim, trocando o valor do 18 por 10, ou colocar let listas of lista.
*/

/*
const quantidadeTotal = Number(prompt('Digite a quantidade de linhas:'))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal){
    let linha = ""
    for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log (linha)
    quantidadeAtual++
}
-----------> aparecerá 4 linhas, e em cada uma eles irão acrescentando 1 *
*/

/*
const quantidadeBichinhos = Number(prompt ('Quantos bichinhos de estimação possui?'))
const nomes = []
const frase = ""
    if  (quantidadeBichinhos === 0){
        console.log ('Que pena! Você pode adotar um pet!')}
    else{
       for (let i =0; i < quantidadeBichinhos; i++){
        nomes.push (prompt ('qual os nomes do seu bichinho?'))
       }
    }
for (let bicho of nomes){
    frase += bicho+" "
    
}

console.log ('os nomes dos bichos sao:', frase)
*/


const arrayOriginal = [52,3,8,20,87,45]
const pares = []

for (let numero of arrayOriginal){
        console.log (numero)
        console.log (numero/10)
    if (numero%2 === 0)
        pares.push(numero)
}

for (let i = 0; i < arrayOriginal.length; i++){
    console.log (`O elemento do index ${i} é: ${arrayOriginal[i]}.`)
}

