// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require('readline-sync')

/* // declarando variáveis
let nome
let idade
let primeiraDoacao

// entrada de dados
console.log("Digite o nome do(a) doador(a): ")
nome = leia.question() // a informação será lida e guardada na variável nome

console.log("Digite a idade do(a) doador(a): ")
idade = leia.questionInt() // a informação será lida e guardada na variável idade

console.log("É a primeira doação de sangue? (True/False) ")
primeiraDoacao = leia.question().toLowerCase() === "true"

// processamento e saída de dados
if (idade < 18 || idade > 69) {
    console.log(nome + ", você não está apto para doar sangue.")
}

else if (idade >= 60 && idade <= 69 && primeiraDoacao) {
    console.log(nome + ", você não está apto para doar sangue.")
}

else {
    console.log(nome + ", você está apto para doar sangue.")
} */

// declarando variáveis
let nome
let idade
let primeiraDoacao

// entrada de dados
console.log("Digite o nome do(a) doador(a): ")
nome = leia.question() // a informação será lida e guardada na variável nome

console.log("Digite a idade do(a) doador(a): ")
idade = leia.questionInt() // a informação será lida e guardada na variável idade

primeiraDoacao = false // valor padrão (não será perguntado para quem tem < 60)

// se a idade estiver entre >= 60 e <= 69, pergunta-se sobre a primeira doação
if (idade >= 60 && idade <= 69) {
    console.log("É a primeira doação de sangue? (true/false) ")
    primeiraDoacao = leia.question().toLowerCase() === "true"
}

// processamento e saída de dados
if (idade < 18 || idade > 69) {
    console.log(nome + ", você não está apto para doar sangue.")
}

else if (idade >= 60 && idade <= 69 && primeiraDoacao) {
    console.log(nome + ", você não está apto para doar sangue.")
}

else {
    console.log(nome + ", você está apto para doar sangue.")
}