/*
let i = 0;
while (i<10){
    console.log ("O numero é:",i)
    i++;
}
*/

/*
let estomago = 0
while (estomago<100){
    console.log ('Quero comer mais coxinhas')
        estomago = estomago + 10
}
*/       

/*
while -----> enquanto
let n = 10
let soma = 0

while (n !==0){
    n = Number(prompt('digite um numero:'))
    soma += n
    console.log ('O numero digitado foi:', n)
}

console.log (soma)
*/

/*
------------> contar do numero inserido no let ate o numero maximo do while.
let c = 1
do {
    console.log ('o valor do contador é:', c)
    c++
}while(c<=6)
*/


//-------------------------- FOR, codigo q simplifica a escrita de laços que tenham este comportamento, muito utilizados em arrays

/*
let numero = [14,67,89,15,23]

for (let i=0; i<5;i++){
    const elemento = numero [i]
    console.log (elemento)
}
*/

/*
let numeros = [11,15,18,13,12,13]
numeroMaior = numeros[0]

for (let i=0; i<6;i++){
    if(numeroMaior<numeros[i]){
        numeroMaior=numeros[i]
    }
}
console.log ('o maior numero é: ',numeroMaior )
*/

/*
let numeros = [11,15,18,14,12,13]
soma = 0

for (let i=0;i<6;i++){
    if(numeros [i]%2===0){
        soma += numeros[i]
    }
}
console.log ('a soma dos numero pares é: ',soma)
*/

/*
const numeros = [14,67,89,15,23]
for(let ordem of numeros){
    console.log (ordem)
}
*/

/*
const frase = ['oi','sumido','tudo','bem?','saudades!']
let fraseC=""
for(let ordem of frase){
    fraseC+=ordem+" "
}
console.log (fraseC)
*/

/*
let numeros = [11,15,18,14,12,13]
soma = 0

for (let numero of numeros){
    if(numeros %2===0){
        soma += numeros
    }
}
console.log ('a soma dos numero pares é: ',soma)
*/

/*
-->usar push, length
const palavrasL = ['cefaleia'8,'australoptecos'14,'papelaria9/,'dinossauro'/,'amor']

const palavrasMaisLonga = [palavrasL[0]]
for(let palavra of palavrasL){
    if (palavrasMaisLonga[0].length<palavra.length){
      palavrasMaisLonga.push(palavra)
    }
}
console.log(palavrasMaisLonga)
*/










