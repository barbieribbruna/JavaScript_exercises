// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declarando variáveis
let n1, n2, n3, n4, diferencaProdutos

// entrada de dados
console.log("Digite o número 1: ")
n1 = leia.questionFloat()

console.log("Digite o número 2: ")
n2 = leia.questionFloat()

console.log("Digite o número 3: ")
n3 = leia.questionFloat()

console.log("Digite o número 4: ")
n4 = leia.questionFloat()

// processamento de dados
diferencaProdutos = (n1 * n2) - (n3 * n4)

// saída de dados
console.log("\nA diferença entre (n1 * n2) e (n3 * n4) é de " + diferencaProdutos.toFixed(1)) // toFixed(1) mostra o resultado com uma casa decimal