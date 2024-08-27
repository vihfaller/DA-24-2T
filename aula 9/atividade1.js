// ------------------------------------------------------- EXERCICIOS
/*
let array 
console.log('a.  ', array) // Imprime Undefined

array = null
console.log('b.  ', array) // Imprime valor Null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c.  ', array.length) // Imprime 11

let i = 0
console.log('d.  ', array[i]) // Imprime 3

array[i+1] = 19
console.log('e.  ', array) // Imprime [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f.  ', valor) // Imprime 9
*/

/*
const frase = prompt('Digite uma frase')
console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length) 
// Se a frase for "Socorram-me subi no ônibus em Marrocos", será impresso "SOCORRIM-ME SUBI NO ÔNIBUS EM MIRROCOS 38" 
*/

/*
const email = prompt ('Qual o seu email?')
console.log (email)
const usuario = prompt ('Qual será seu nome de usuario?')
console.log (usuario)
const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${usuario} `
console.log(frase)
*/ 

/*
const comidas = ["massa","comida da minha mae","sushi","pizza","xis","carne"]
const frase = (`minhas comidas preferidas sao:
    ${comidas[0]}
    ${comidas[1]}
    ${comidas[2]}
    ${comidas[3]}
    ${comidas[4]}
    ${comidas[5]}`)
console.log (frase)
comidas[1] = prompt ("Qual sua comida favorita?")
console.log (comidas)
*/

/*
const listaDeTarefas = null
const quest1=prompt ('Diga-me 1 tarefa do seu dia:')
const quest2=prompt ('Diga-me mais uma tarefa do seu dia:')
const quest3=prompt ('Por ultimo, diga uam ultima tarefa do seu dia:')
const listaDoUsuario = [quest1,quest2,quest3]
console.log (listaDoUsuario)

const index = listaDoUsuario.indexOf(prompt('Das tarefas que tu listou, qual tu já realizou?')) 
if (index > -1) {
  listaDoUsuario.splice(index, 1);
}
console.log (listaDoUsuario)
*/

