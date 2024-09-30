/*
let matriz=[ ------> definindo um matriz com sua quantidade de 3x3(nesse caso especifico)
    [2,4,6], ------> m.0- 0,1,2
    [8,10,12], ------> m.1- 0,1,2
    [14,16,18] ------> m.2- 0,1,2
];
console.log(matriz[2][1]); ------> imprimindo o numero 16, pois ele quer a segunda coluna com o primeiro item
------------------------------------------------------------------------------------------------------------------------
let matriz=[
    [1,2],
    [3,4],
    [5,6,7]
];

for(let i=0; i<matriz.length;i++){
    for(let j=0;j<matriz[i].length;j++){
        if(matriz[i][j]%2 === 0){
            console.log(matriz[i][j]);
        }
    }
}
------> será impresso apenas os nuemro 2,4,6. esses numeros serao exibidos pois querem apenas impressos os nuemros divisiveis por 2.

------------------------------------------------------------------------------------------------------------------------
let matriz=[
    [5,10,15],
    [20,25,20],
    [35,40,45]
];

let soma = 0;
for(let i=0;i<matriz.length;i++){
    for (let j=0;j<matriz[i].length;j++){
        soma+=matriz[i][j];
    }
}

console.log(soma);
------> sera impresso o valor 215, pois oq foi solicitado é a soma de todos os valores digitados na matriz.
------------------------------------------------------------------------------------------------------------------------
let matriz=[
    [2,1,0,0,0],
    [2,2,1,0,0],
    [2,2,1,1,0],
    [2,2,2,1,0],
    [2,2,2,1,0],
    [2,2,2,1,0]
];

console.log(matriz[0],matriz[1],matriz[2],matriz[3],matriz[4],matriz[5])
------------------------------------------------------------------------------------------------------------------------
let matriz=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,12,13],
    [14,15,16,17],
    [18,19,20,21]
];

console.log(matriz.reverse())
------------------------------------------------------------------------------------------------------------------------ DESAFIO JURASSIC PARK
*/
//0: "grama"; 1: "água"; 2: "floresta"; 3: "carnívoro"; 4: "herbívoro" (10x10)
//exemplo de movimentos: const movimentos=[[-1,0],->cima[1,0], //baixo[0,-1], //esquerda[0,1] //direita
let mapa=[ 
    [0,0,1,1,2,2,0,0,0,4],
    [0,1,1,2,2,0,0,0,4,4],
    [1,1,2,2,0,0,0,4,4,3],
    [1,2,2,0,0,0,4,4,3,0],
    [2,2,0,0,0,4,4,3,0,0],
    [2,0,0,0,4,4,3,0,0,1],
    [0,0,0,4,4,3,0,0,1,1],
    [0,0,4,4,3,0,0,1,1,2],
    [0,4,4,3,0,0,1,1,2,3],
    [4,4,3,0,0,1,1,2,3,3],
    [4,3,0,0,1,1,2,3,3,0]
];

















