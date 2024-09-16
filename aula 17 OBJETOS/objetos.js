/*
const professor = {
    nome : 'vitoria',
    idade : 20,
    altura: 1.57
}
-------------------------------------------------------
const professor = {
    nome : 'vitoria',
    idade : 20,
    altura: 1.57,
    tarefas:['Dar aula','responder duvidas'],
    contarPiadas: function (){
        console.log ('É pa vê ou pa comer?')
    }
}
-------------------------------------------------------
const professor = {
    nome : 'vitoria',
    idade : 20,
    altura: 1.57,
    tarefas:['Dar aula','responder duvidas'],
    contarPiadas: function (){
        console.log ('É pa vê ou pa comer?')
    }
}
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
-------------------------------------------------------
const professor = {
    nome : 'vitoria',
    idade : 20,
    altura: 1.57,
    email: 'vitoriafallerbier@gmail.com',
    tarefas:['Dar aula','responder duvidas'],
    contarPiadas: function (){
        console.log ('É pa vê ou pa comer?')
    }
}
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])
-------------------------------------------------------
const professor = {
    nome : 'vitoria',
    idade : 20,
    altura: 1.57,
    email: 'vitoriafallerbier@gmail.com',
    tarefas:['Dar aula','responder duvidas'],
    contarPiadas: function (){
        console.log ('É pa vê ou pa comer?')
    }
}
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])

professor.nome = 'Vih'
professor.email = 'vihfb@gmail.com'

console.log(professor.nome)
console.log(professor["email"])
-------------------------------------------------------
const filme = {
    nome: 'Zathura',
    anoDeLancamento: 2005,
    elenco: ['Jonah bobo', 'Josh Hutcherson', 'Kristen Stewart', 'Derek Mears'],
    assistido: 'sim, ja assisti milhares de vezes'
}
console.log (filme.nome)
console.log (filme.anoDeLancamento)
console.log (filme['elenco'])
console.log (filme['assistido'])
-------------------------------------------------------
const filme = {
    nome: 'zathura',
    anoDeLancamento: 2005,
    elenco: ['Jonah bobo, Danny', 'Josh Hutcherson, Walter', 'Kristen Stewart, Lisa', 'Derek Mears, Líder Zongon'],
    assistido: 'sim'
}
filme.elenco = 'Xuxa'

console.log (filme.nome)
console.log (filme.elenco)
-------------------------------------------------------
const pessoa = {
    nome: 'Luut da Massa',
    idade: '30',
    generoMusical: 'rock'
}
console.log (`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)
-------------------------------------------------------
const donoDoPet = {
    nome: 'Vitoria',
    idade: 20,
    pet:{
        nomeDoPet: 'Mikaela',
        raca: 'vira-lata',
        idade: 7
    }
}
console.log(donoDoPet.pet.nomeDoPet)
-------------------------------------------------------
const professor = {
    nome : 'vitoria',
    idade : 20,
    altura: 1.57,
    email: 'vitoriafallerbier@gmail.com',
    tarefas:['Dar aula','responder duvidas'],
    contarPiadas: function (){
        console.log ('É pa vê ou pa comer?')
    }
}
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])

professor.nome = 'Vih'
professor.email = 'vihfb@gmail.com'

console.log(professor.nome)
console.log(professor["email"])
console.log (professor.tarefas[0])
-------------------------------------------------------
const curso = {
    nome: 'front end noturno',
    linguagens: ['js','css','html']
}
console.log(curso.linguagens[0])
-------------------------------------------------------
const professores=[
    {nome:'Lucas',idade: 32,modulo:1},
    {nome: 'Leo',idade: 29,modulo:2},
    {nome: 'Mika',idade:29,modulo:3}
]
console.log(professores[0].nome)
-------------------------------------------------------
const curso = {
    nome: 'front end noturno',
    linguagens: ['js','css','html']
}
console.log(curso.linguagens[0])

curso.numeroEstudantes = 50
curso.['numeroProfessores'] = 10

console.log (curso.numeroEstudantes)
console.log (curso.numeroProfessores)
-------------------------------------------------------
const usuario = {
    nome: 'Prof',
    idade: 28,
    email: 'prof@gmail.com',
    cidade: 'Sao Leopoldo'
}

const novoUsuario = {
    ...usuario,
    nome: 'Lucas',
    idade: 32
} 
console.log(novoUsuario)
-------------------------------------------------------
const nomesProfs = ['lucas', 'leo', 'mika']
const novoListaProfs = [...nomesProfs]
console.log (novoListaProfs)
-------------------------------------------------------
const pessoa = {
    nome: 'Luut da Massa',
    idade: '30',
    generoMusical: 'rock'
}
console.log (`O nome da pessoa é ${pessoa.nome}, ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

const novaPessoa = {
    ...pessoa,
    melhorAmigo:{
        nome: 'vitor',
        idadeAmigo: 21,
        comidaPreferida: ['xis','enroladinho','pizza']
    }
}
console.log (`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${novaPessoa.melhorAmigo.comidaPreferida[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idadeAmigo}.`)
*/

const personagem1 = ['Tanjiro','16','6 classe','tecnica de respiraçao']
const personagem2 = ['Nezuko','12','Demonio','Demonio de sangue']
const personagem3 = ['Muzan','20','Luas superiores','habilidade de mudar sua forma e aparência']

const adicionarPersonagem = {
    ...personagem1,
    sobre:{
        nome: 'Kyōjurō Rengoku',
        idade: 20,
        classe: 'Caçador de Demônio',
        jutsu: 'golpe devastador'
    }
}

function buscarPersonagem(personagem1){
    return adicionarPersonagem
}

const listarPersonagens 






































