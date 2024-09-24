/*
--------------------------------------------------------------------------------------------------------------------------------------- exemplo
let matriz =[
    [1,2,3], -----> coluna 1, com tres posiçoes começando por 0
    [4,5,6]  -----> coluna 2, com tres posiçoes começando por 0
]

console.log (matriz[1][0]) -----> chamar a gaveta, por entre colchetes a coluna e linha em colchetes diferentes
--------------------------------------------------------------------------------------------------------------------------------------- exemplo
let matriz = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];
--------------------------------------------------------------------------------------------------------------------------------------- exemplo
let matriz3 = []

matriz3[0]=[1,2,3]
matriz3[1]=[4,5,6]
matriz3[2]=[7,8,9]
--------------------------------------------------------------------------------------------------------------------------------------- exemplo
let matriz=[
    [10,20,30],   //linha 0, posiçoes 0,1,2
    [40,50,60],   //linha 1, posiçoes 0,1,2
    [70,80,90]    //linha 2, posiçoes 0,1,2
]

console.log (matriz[0][1]) //valor 20
console.log (matriz[2][1]) //valor 80
console.log (matriz[1][0]) //valor 40
--------------------------------------------------------------------------------------------------------------------------------------- exercicio 1
let matriz=[
    [0,0,0],
    [0,0,0],
    [0,0,1]
]

console.log (matriz) //vai mostrar todo o array com cada valor do seu lugar 
--------------------------------------------------------------------------------------------------------------------------------------- EX 2
let matriz=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        console.log (matriz[i][j])
    }
}
--------------------------------------------------------------------------------------------------------------------------------------- SOMANDO NA MATRIZ
let matriz=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let SOMA=0
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        SOMA += matriz[i][j]
    }
}
console.log (SOMA)
--------------------------------------------------------------------------------------------------------------------------------------- 
  . Matriz com 4x4 de 1 a 16.
  . Funçao que percorre a matriz e calcular a soma de todos os elementos e resultado no console.


let matriz=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

function somarPosicoes(){
    let SOMA=0
    for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        SOMA += matriz[i][j]
    return SOMA
    }
} 
}

console.log (somarPosicoes())
--------------------------------------------------------------------------------------------------------------------------------------- exercicio Batalha Naval
*/
let tabuleiro=[
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0], //x=2,3,4
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

function lugarNavio(){
    tabuleiro[3][1]='x'
    tabuleiro[3][2]='x'
    tabuleiro[3][3]='x'
}

let soma=0
for(let i=0; i<tabuleiro.length; i++){
    for(let j=0; j<tabuleiro[i].length; i++)
        quantidadeNavios+=tabuleiro[i][j]
}

let escolhaLinha = Number(prompt("Escolha a linha que tudo deseja atacar!"))
let escolhaColuna = Number(prompt("Escolha a linha que tudo deseja atacar!"))

function verificaPoicao(linha,coluna){
            if(tabuleiro[linha][coluna] == 1){
                console.log("Acertou")
            }
            else if ()
            else
}



/*
[0,0,0,0,0,0,0,0,0,0], 0
[0,0,0,0,0,0,0,0,0,0], 1
[0,0,0,0,0,0,0,0,0,0], 2
[0,x,x,x,0,0,0,0,0,0], 3 =1,2,3
[0,0,0,0,0,0,0,0,0,0], 4
[0,0,0,0,0,0,x,0,0,0], 5 = 6
[0,0,0,0,0,0,x,0,0,0], 6 = 6
[0,0,0,0,0,0,0,0,0,0], 7
[0,0,x,x,x,0,0,0,0,0], 8
[0,0,0,0,0,0,0,0,0,0], 9
[0,0,0,0,0,0,0,0,0,0]  10
*/



























































































