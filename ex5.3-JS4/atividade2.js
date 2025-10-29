// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declarando variáveis
let nota1, nota2, nota3, nota4, mediaFinal

// entrada de dados
console.log("Digite sua nota 1: ")
nota1 = leia.questionFloat()

console.log("Digite sua nota 2: ")
nota2 = leia.questionFloat()

console.log("Digite sua nota 3: ")
nota3 = leia.questionFloat()

console.log("Digite sua nota 4: ")
nota4 = leia.questionFloat()

// processamento de dados
mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

// saída de dados
console.log("\nA sua média final é " + mediaFinal.toFixed(1)) // toFixed(1) mostra o resultado com uma casa decimal