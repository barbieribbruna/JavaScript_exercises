// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require('readline-sync')

// declarando variáveis
let i

// entrada de dados
console.log("Digite um número: ") // avisa o usuário
i = leia.questionFloat() // a informação será lida e guardada na variável i

// processamento e saída de dados - laço condicional
if (i % 2 == 0 && i > 0) { // condição par e positivo
    console.log("O número digitado " + i + " é par e positivo.")
}

else if (i % 2 == 0 && i < 0) { // condição par e negativo
    console.log("O número digitado " + i + " é par e negativo.")
}

else if (i % 2 != 0 && i > 0) { // condição ímpar e positivo
    console.log("O número digitado " + i + " é ímpar e positivo.")
}

else { // condição ímpar e negativo
    console.log("O número digitado " + i + " é ímpar e negativo.")
}