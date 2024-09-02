/*
const respostaUsuario = prompt ("Digite um número que voce quer testar")
const numero = Number (respostaUsuario)
if (numero % 2 === 0){
    console.log ("Passou no teste.")
} else {
    console.log ("Nao passou no teste.")
}
-------> o codigo irá dizer se o numero que digitamos é par ou ímpar
-------> resultado "passou no teste"  se o numero foi divisivel por 2, par
-------> resultado "nao passou no teste"  se o numero nao for divisivel por 2, ímpar
*/

/*
let fruta = prompt ("Escolha uma fruta")
let preco
switch (fruta) {
    case "Laranja":
        preco = 3.5
        break
        case "maçã":
        preco = 2.25
        break
        case "uva":
            preco = 0.30
            break
            case "Pera":
                preco = 5.5
                default:
                    preco = 5
                    break;
}
console.log ("O preço da fruta", fruta,"é", "R$", preco)
------> o codigo serve para sabermos o valor das frutas mencionadas.
------> "O preço da fruta maçã é R$2.25"
------> ele daria o valor da pera de R$5
*/

/*
const numero = Number (prompt ("Digite o primeiro número.")) //solicitando q o usuario digite um numero 
if (numero>0){
    console.log ("Esse numero passou no teste")
    let mensagem = "Essa mensagem é secreta"
}
console.log (mensagem)
------>se o valor for 10, ira dizer q passou no teste, se for negativo falará q a mensagem é secreta 
------>toda vez q escrito um numero negativo da erro no codigo
*/

/*
let idade = Number (prompt ("Qual a sua idade?"))
console.log (idade)
if (idade>18){
    console.log ("Voce ja pode dirigir")
}else{
    console.log ("Voce nao pode dirigir ainda")
}
*/

/*
let quest = prompt("Qual seu turno de estudos?")
console.log (quest) 
if ("manhã"===quest){
    console.log ("Bom dia")
}else if ("tarde"===quest){
    console.log ("boa tarde")
}else{
    console.log ("boa noite")
}
_________________________________________

let quest = prompt ("Qual seu turno de estudos?")
let turno
switch (quest){
    case 'manhã':
    console.log ('bom dia')
    break 
    case 'tarde':
        console.log ('boa tarde')
        break
        case 'noite':
            console.log ('boa noite')
            default:
                console.log ('nao foi encontrado')
                break
}
*/

 /*
const comedia = 10
const açao = 20
const drama = 18
const animaçao = 15

let comed = prompt("Querem assistir comedia?") === 'sim'
let comedy = prompt('É 10, vai querer?') === 'sim'
if (comed && comedy) {
    let lanche = prompt ("Qual lanche vai querer?") 
    console.log('Bom filme de comedia e aproveite seu lanche!')
    console.log (lanche)
} else {
    let aca = prompt("Querem assistir açao?") === 'sim'
    let acaoo = prompt("É 20, vai querer?") === 'sim'

    if (aca && acaoo) {
        console.log('Bom filme acao!')
        let lanche = prompt ("Qual lanche vai querer?") 
        console.log (lanche)
    } else {
        let dram = prompt("Querem assistir drama?") === 'sim'
        let dra = prompt('É 18, vai querer?') === 'sim'
        if (dram && !dra) {
            console.log('Bom filme de drama!')
            let lanche = prompt ("Qual lanche vai querer?") 
            console.log (lanche)
        }
        else {
            let anima = prompt("Querem assistir animaçao?") === 'sim'
            let anim = prompt('É 15, vai querer?') === 'sim'
            if (anima && anim)
                console.log('Bom filme animacao!')
            let lanche = prompt ("Qual lanche vai querer?") 
            console.log (lanche)
        }



    }
}
*/ 

/*
let nome = prompt ('Qual seu nome?') 
let tipo = prompt ('Qual tipo de jogo irá assistir? IN, DO')
let etapa = prompt  ('Qual a etapa? SF, DT, FI').toUpperCase()
let categoria = prompt ('Qual a categoria? 1, 2, 3, 4.')
let quantidade = prompt ('Quantos ingressos desejas?')
let valor

switch (categoria){
  case 1:
    if (etapa==='SF') {valor = 1320}
    if (etapa === 'DT') {valor = 660}
    if (etapa === 'FI') {valor = 1980} 
    break
    
    case 2:
    if (etapa==='SF') {valor = 880}
    if (etapa === 'DT') {valor = 440}
    if (etapa === 'FI') {valor = 1320} 
    break

    case 3:
    if (etapa==='SF') {valor = 550}
    if (etapa === 'DT') {valor = 330}
    if (etapa === 'FI') {valor = 880} 
    break

    case 4:
    if (etapa==='SF') {valor = 220}
    if (etapa === 'DT') {valor = 170}
    if (etapa === 'FI') {valor = 330} 
    break
}
if(tipoJogo === 'IN'){
    valor*5.65
}

let valorTotal = valor * quantidade

console.log ('Nome:, nome', nome)
console.log ('Tipo do jogo:', tipoJogo)
console.log('Etapa do jogo:', etapa)
console.log ('Categoria:', categoria)
console.log ('Valor do ingresso:', valor.toFixed(2))
console.log ("Quantidade:", quantidade)
console.log ('Valor total:', valorTotal.toFixed(2))
*/
