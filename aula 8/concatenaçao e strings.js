/*
--------------------------------------------------    CONCATENAÇAO, preenchimento com os dados 
const nome = prompt ("Qual seu nome?")
console.log ("nome")
const cor = prompt ("qual sua cor favorita?")
console.log ("cor")
console.log (`A cor de ${nome} é ${cor}`)
*/

/*
--------------------------------------------------    TEMPLATE, preenchimento com os dados
const nome = "Vitoria"
const idade = 20
const frase = `Meu nome é: ${nome} e minha idade é: ${idade} anos`
console.log(frase)
*/

/*
--------------------------------------------------    LENGTH, saber quantidade de caracteres
const nome = 'Vitoria'
console.log (nome.length)
*/

/*
--------------------------------------------------    TOLOWERCASE, deixar o texto em letra minuscula
const nome = 'Vitoria'
console.log(nome.toLowerCase())
*/

/*
--------------------------------------------------    TOUPPERCASE, deixar o texto em letra maiuscula
const nome = 'Vitoria' 
console.log (nome.toUpperCase())
*/

/*
--------------------------------------------------    TRIM, retirar espaços que existem antes e depois da sua string
const email = " vitoriafallerbier@gmail.com "
console.log (email.trim())
*/

/*
--------------------------------------------------    INCLUDES, determina um conjunto de caracteres, resultando em true ou false
const frase = "hoje comi cenoura"
console.log(frase.includes
    ("cenoura"))
console.log(frase,includes
    ("batata"))
*/

/*
--------------------------------------------------    REPLACEALL, troca todas as ocorrencias de um conjunto de caracteres por outra coisa    
const frase = ("Hoje comi cenoura, adoro cenoura")
const novaFrase = frase.replaceAll
("cenoura","batata")
console.log (novaFrase)
*/

/*
--------------------------------------------------    EXERCICIO

  const frase = "Hoje esta muito nublado, porem, amanha haverá Sol"
  console.log (frase.toUpperCase())
  const novaFrase = frase.replaceAll
  ("o","i")
  console.log (novaFrase)
  console.log (frase.length)
*/


//--------------------------------------------------    ARRAYS, lista de elementos, sendo armazenado mais de uma coisa dentro de uma variavel, utilizando colchetes []. começa em zero.

//exemplo:
/*
const frutas = ["abacate","banana","tomate","milho","uva","morango"]
const fruta = frutas[2]
console.log (fruta)
*/

/*
const animal = number (prompt ("Insira um numero de 0 a 4"))
console.log (animal)
const racas = ["Spitz Alemão","Buldogue Francês","Shih Tzu","Rottweiler","Golden Retriever"]
const raca = racas[3]
console.log (raca) 
*/

/* 
--------------------------------------------------    ARRAY COM LENGHT 
const pokemons =["bulbasaur","squirtle","charmander"]
console.log(pokemons.length)
*/

/*
const seriesBoas = ["you","the bigbang theory"]
console.log(seriesBoas.includes("you"))

console.log (seriesBoas.includes
    ("Game of Thrones"))
*/ 

//--------------------------------------------------   PUSH , adiciona um ou mais elementos ao final de um array

/*
const  numeros = [1,2,3]
numeros.push(4)
console.log (numeros)
numeros.push (5,6,7,8,9)
console.log (numeros)
*/

//--------------------------------------------------   POP, ira apagar o ultimo elemento da lista

/*
const meusPeixes = ["palhaço","mandarim","esturjão"]
console.log (meusPeixes)
meusPeixes.pop()
console.log (meusPeixes)
*/

//--------------------------------------------------   SPLICE (i,n), remove n (n representa a quantidade) elementos a partir da posiçao i do array

/*
const letras = ["A","B","C","D","E","F","G","H"]
letras.splice(2,1)
console.log (letras)
letras.splice(5,2)
*/

//--------------------------------------------------    EXERCICIO

const ordem = ["1","2","3","4","5","6"]
ordem.push(7)
console.log (ordem)
ordem.splice (3,2)
console.log (ordem)
console.log (ordem.length) 