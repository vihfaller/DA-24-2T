/* const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor && segundoValor
console.log (resultado) 
*/

/*
 const a = true
 const b = false
 const c = true
 const resultado = a&&b
 console.log (resultado)
 */

 /*
 const a = true
 const b = false
 const c = true
 const resultado = b && c
 console.log (resultado) 
 ---resultado será falso
 */

 /*
 const a = true
 const b = false
 const c = true
 const resultado = a && c
 console.log (resultado)
 --- resultado será verdadeiro
 */

 /*
 const a = true
 const b = false
 const c = true
 const resultado = a && b && c
 console.log (resultado)
 --- resultado será falso 
 */

 /*
 const primeiroValor = true
 const segundoValor = true
 const resultado  = primeiroValor || segundoValor
 console.log (resultado)
 */

/*
 const a = true
 const b = false
 const c = true
 const resultado = a || b
 console.log (resultado)
 --- resultado é true
 */

 /*
 const a = true
 const b = false
 const c = true
 const resultado = b || c
 console.log (resultado)
 --- o resultado é true
 */

/*
 const a = true
 const b = false
 const c = true
 const resultado = a || c
 console.log (resultado)
 --- o resultado é true
 */

 /*
 const a = true
 const b = false
 const c = true
 const resultado = a || b || c
 console.log (resultado)
 --- resultado é true, so daria false se todas elas fossem false
 */

/*
 const primeiroValor = true
 const resultado = !primeiroValor
 console.log (resultado)
 -- resultado é false
 */

/*
 const primeiroValor = false
 const resultado = !primeiroValor
 console.log (resultado)
 -- resultado é verdadeiro 
 */

/*
 const nome = prompt ("Qual o seu nome?")
 console.log ("nome:",nome)
 const anoNasci = prompt ("Qual seu ano de nascimento?")
 const anoAtual = prompt ("Qual o ano atual?")
 const idade = anoAtual - anoNasci
 console.log ("idade?",idade)
 const maiorIdade = idade >=18
 console.log ("É maior de idade?", maiorIdade)
 const diferençaAnos = 2050 - anoAtual
 console.log ("Idade em 2050...", idade+diferençaAnos)
*/


const bool1 = true //gaveta 1 é true
const bool2 = false //gaveta 2 é false
const bool3 = !bool2 //gaveta 3 é true pq o sinal de "!" significa ser ao contrario do valor inserido que no caso é o valor de bool2, false.

let resultado = bool1 && bool2 //true e false
console.log ("a. ", resultado) //a. false pq true com false da false 

resultado = bool1 && bool2 && bool3 //true e false e true?
console.log ("b.  ", resultado) //resultado, false pq é true com false da false, mas false com true da true

resultado = !resultado && (bool1 || bool2) // true q é resultado && (true com true é true)
console.log ("c.  ", resultado) //resultado true

console.log ("d. ", typeof resultado) //resultado boolean
