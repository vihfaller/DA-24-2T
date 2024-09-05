/* ------> CONTADOR SIMPLES
let i = 0
while (i<11){
    console.log (i)
    i++
}
*/

/* ------> CONTADOR DE PARES

let i = 2
for (let i=2; i<=20; i+=2)
    console.log (i)
  
*/

//    ------> TABUADA
/*
const qualNumero = Number(prompt('Digite um numero e descubra a tabuada dele:'))
let i=0
for(let i=0; i<=10; i++){
    console.log(i*qualNumero)
}
*/


//     ------> SOMA DE NUMEROS


/* ----------------------------------------------->   exemplo de WHILE e FOR em uma atividade só, mas ultilizar so um dos dois sempre !!!!!!!
let contador = 0
while (contador<5){
    const numero = Number(prompt('insira um numero:'))
    contador++
    console.log(numero)
}
--------------------------------------------------------------------
for(let contador = 0; contador< 5; contador++)
{
    const numero = Number(prompt('insira um numero:'))
    console.log(numero)
}
*/    
//______________________________________________________________________________

/*
let soma = 0
let prof
for(let i=0; i<5; i++){
    prof = Number(prompt('Qual a nota de 5 alunos?'))
    console.log (prof)
    soma = soma + prof
}
console.log (soma/5)
*/

/* ----------------> VALIDOR DE CPF 
const cpf = (prompt('Digite seu cpf:'))
 if (cpf.length === 11){
    console.log('cpf valido')}
 else{
    console.log(`cpf invalido`)
 } 
*/

// ---------------> SIMULADOR D ECAIXA ELETRONICO

/*
const saque = Number(prompt('Quanto deseja depositar:'))
console.log ('notas sacadas')

let notas = [100,50,20,10,5,2,1]

for(let nota of notas){
    let quantidade = Math.floor(saque/nota)

    if (quantidade>0){
        console.log (`a quantidade de ${nota} é ${quantidade}`)
        saque -= quantidade * nota 
    }   
}
*/ 






 
