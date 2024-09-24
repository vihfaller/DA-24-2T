/* 
--------> Exemplo de entrada
const pessoa = { 
    nome: 'Vitoria'
    apelido: ['Vi','Vivi','Fifi','Vivica']
}
--------> Exemplo de saída 
"Eu sou Vitoria, mas pode me chamar de: Vi, Vivi, Fifi, Vivica"
*/

/*
const pessoa = {
    nome: "Vitoria",
    apelido: ['Vivi','Vi', 'Vivica']
};
function imprimirMensagem(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}.`)   
}

imprimirMensagem(pessoa);
*/

/*
const imprimirMensagem

imprimirMensagem(pessoa);

const novaPessoa = {
    ...pessoa,
    apelidos: ['Vi','Vivi', 'Fifi']
};

imprimirMensagem(novaPessoa)

const pessoa1 = {
    nome: 'vitoria',
    idade:20,
    profissoa: 'Desenvolvedora'
};

const pessoa2 = {
    nome: 'lucas',
    idade: 18,
    profissao: 'Desenvolvedor'
};

function retornarInformacoes(objeto){
    const arrayPessoa = [
        objeto.nome,
        objeto.nome.length,
        objeto.idade,
        objeto.profissao,
        objeto.profissao.length
    ]
    return arrayPessoa
}

console.log (retornarInformacoes(pessoa1));
console.log(retornarInformacoes(pessoa2));
*/

/*
let carrinho = [];

const fruta1 = {
    nome: 'Maçã',
    disponibilidade: true
};

const  fruta2 = {
    nome: 'Banana',
    disponibilidade: true
};

const fruta3 = {
    nome: 'Laranja',
    disponibilidade: true
};

function adicionarAoCarrinho(fruta){
    carrinho.push(fruta);
}

adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);

console.log(carrinho);
*/

/*
--------> exemplo de entrada: 'Lais',26,'programadora'
--------> o que deve ser impresso no console:
{nome: 'lais', profissao:'programadora', idade: 26}
"Object"
*/

/*
const filme = {
    nome: 'enrolados', 
    lancamento: [2010],
    quando: false
};

const filmes = {
    nome: 'Kill Bill',
    lancamento: [2003],
    quando: false
}

let antes= prompt('O primeiro filme foi lançado antes do segundo?')
let mesmo= prompt('O primeiro filme foi lançado no mesmo ano do segundo?')

console.log (antes,mesmo)
*/

const elementos= ['chimarrao','pilcha','lendas']
//1chimarrao: seculo 17-- 2pilcha: 1947-- 3lendas: sem data 
//tipo: 
// descriçao: 1(so pode bebr se estiver quente, possui ervas e se divide), 2(traje gaucho), 3(é varios con-
// tos da populaçao contada de boca em boca)
// regiao: os 3 itens é utilizado muito em todo o estado do rs

const chimarrao={
    descricao: ['so pode bebr se estiver quente, possui ervas e se divide'],
    regiao: ['todo o rio grande do sul'],
    ano: 1700
};
 
const pilcha={
    descricao:['traje gaucho'],
    regiao:['todo o rio grande do sul'],
    ano: 1947
};

const lendas={
    descricao:['é varios contos da populaçao contada de boca em boca'],
    regiao:['todo o rio grande do sul'],
    ano: 'sem data definida'
};



























