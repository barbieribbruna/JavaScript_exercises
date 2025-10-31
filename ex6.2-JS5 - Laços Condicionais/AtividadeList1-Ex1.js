// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require('readline-sync')

// declarando variáveis
let A, B, C, soma

// entrada de dados
console.log("Digite um número para A: ") // avisa o usuário
A = leia.questionFloat() // a informação será lida e guardada na variável A

console.log("Digite um número para B: ") // avisa o usuário
B = leia.questionFloat() // a informação será lida e guardada na variável B

console.log("Digite um número para C: ") // avisa o usuário
C = leia.questionFloat() // a informação será lida e guardada na variável C

// processamento de dados
soma = A + B

// saída de dados - laço condicional
if (soma > C) {
    console.log("A soma de A + B é " + soma + ". E essa soma é maior do que C, que vale " + C + ".")
}

else if (soma < C) {
    console.log("A soma de A + B é " + soma + ". E essa soma é menor do que C, que vale " + C + ".")
}

else{
    console.log("A soma de A + B é " + soma + ". E essa soma é igual a C, que vale " + C + ".")
}

