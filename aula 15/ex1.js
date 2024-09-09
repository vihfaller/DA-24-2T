/* sempre criar a funçao, depois chamar ela !!!!!!!!!!!!!
_________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________

---------------------------------------------------------- FUNCTION !!!!! declaraçao de funçao

function calculaArea(altura,largura){ -----> calculando o valor do triangulo, retangulo ou de qualquer area.

    const area = largura * altura ---------> calculando o valor de cada coisa q ele quer
    console.log(area)
}

calculaArea (5,4) ------> ira buscar oq deseja calcular os dois valores entre os parenteses, definindo o valor de cada. altura 5, largura 4, multiplicando esses valores ira trazer o resultado da divisao
calculaArea (8,5)
-----------------------------------------------------
function calculaArea (altura,largura){
    const area = altura*largura
    console.log (area)
}
calculaArea (50,100)
-----------------------------------------------------
function imprimirOlaMundo(){
console.log ('Olá mundo')
}
imprimirOlaMundo()
-----------------------------------------------------
function imprimirNome(nome){ -------->  ira receber este o valor do final dentro dessa variavel 
    console.log('bem vindo(a),',nome)
}
imprimirNome ('vitoria')
-----------------------------------------------------
function bemVindo (turma){
    console.log ('Bem vindo Turma 24-2T!')
}
bemVindo ()
-----------------------------------------------------
function soma(n1,n2){
    const  valores = n1+n2
    console.log(valores)
}
soma (10,40)
-----------------------------------------------------
function multiplicacao (n1){
const valores = n1*2
console.log ('A soma é:', valores)
}
multiplicacao(15)
-----------------------------------------------------
function imprimirNome(nome){
    console.log(`Olá ${nome}.`)
}
imprimirNome ('vitoria')
imprimirNome ('Beto Carrero')
imprimirNome ('jose')
-----------------------------------------------------
function soma(n1,n2){
    const valores = n1+n2
    console.log (valores)
}
soma(50,50)
soma(20,10)
-----------------------------------------------------
function imprimirNome (nome){
    console.log (`Oi ${nome}, saiba que nao precisa ficar meio timida e com vergonha durante a aula, 
        bora animar esse povo quieto kk. Tu é uma guria muito linda, esforçada, dedicada, querida e adoro quando vejo um 
        sorriso no teu rosto. Nao te conheço muito bem, mas gostaria, quem sabe né. Sempre que precisar conversar, pode me chamar sempre que quiser. Beijos `)
}
imprimirNome ('Talita')
---------------------------------------------------------- RETORNO !!

 function calculaArea(largura, altura){
    const resultadoArea = largura * altura
    return resultadoArea ------------------------> essa funçao vai retornar o resultado de area, no caso q de pra utilizar fora do escopo local
}
let area = calculaArea(2,5)
console.log('A area é:', area)
-----------------------------------------------------
function calcular(n1,n2){
    const resultado = n1 + n2
    return resultado
}
let soma = calcular (50,50)
console.log ('A soma dos valores é:', soma)
-----------------------------------------------------
function somaNumeros(numero1,numero2){
    const soma = numero1+numero2
    return soma
}
let resultado = somaNumeros(2,5)
console.log ('A soma é:', resultado)
-----------------------------------------------------
const numeros = [233,43,634,64,27,6] ---------> array de numeros 
function primeiroeUltimo (arrayNumeros){ ---------> essa funçao vai receber uam nova variavel
const novoArray = [] ---------> criar novo array 
novoArray.push(arrayNumeros[0]) ---------> armazenar o primeiro  numero, colocando ele na posiçao 0
novoArray.push(arrayNumeros[arrayNumeros.length-1]) ---------> armazenar o segundo numero, tamanho do array, menos 1
return novoArray
}
console.log(primeiroeUltimo(numeros)) ---------> chamando a funçao
-----------------------------------------------------
const calculaArea = function (largura,altura){
    const soma = largura * altura 
    return soma
}
const resulado = calculaArea(2,5) 

----------------------------------------------------- ARROW FUNCTION '=>' expressao de funçao

const calculaArea = (altura,largura) =>{
    const resulado = largura * altura
    return resulado
}
const area = calculaArea(2,7)
console.log('a area é:', area)
----------------------------------------------------- exercicio com arrow e arrow function 
const dobraNumero = (numero)=>{
    const soma = numero*2
    return soma
}
const number = dobraNumero
console.log ('a dobro é:',number)
--
const calculaArea = function (largura,altura){
    const soma = largura + altura 
    return soma
}
const resulado = calculaArea(5,10) 
console.log ('a area é:', resulado)
*/

// ----------------------------------------------> Quero determinar caracteristica de cada um, depois perguntar ao usuario ate ele acertar qual é o monstro, usando function, if else e else if.
// vampiro: pele branca, gelado, brilha ao sol, adora sangue -- lobisomem: possui pelos, se transforma com a lua cheia, parece um cachorro gigante, possui varios dentes,
// tem garras afiadas -- humano: possui duas pernas, é carnivoro e herbivoro, tem muito no planeta, nao tem garras, nao tem dentes afiados para caçar.

let pele






switch (tipo){
    case vampiro:
        if (pele branca === 'pele branca')
        if (gelado === 'gelado')
        if (tem unhas afiadas === 'tem unhas afiadas')
        if (adora sangue === 'adora sangue')

    case lobisomem:
        if (possui pelos === 'possui pelos')
        if (quente === 'quente')
        if (tem unhas afiadas === 'tem unhas afiadas')
        if (tem varios dentes === 'tem varios dentes')
    
    case humano:
        if (tem pelo ralo === 'tem pelo ralo')
        if (depende === 'depende')
        if (nao tem unhas afiadas === 'nao tem unhas afiadas')
        if (tem muitos no planeta === 'tem muitos no planeta')
}
if (desconhecido === 'nenhum'){
    console.log ('voce nao é nada')
}
console.log (`voce é um ${tipo} das opçoes`)















