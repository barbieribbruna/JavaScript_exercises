// importando a biblioteca para ler dados pelo terminal
const leia = require("readline-sync")

// declarando variáveis
let numero
let soma = 0
let contador = 0
let multiplosPositivos = []

// laço do...while para garantir que o bloco execute pelo menos uma vez
do {
    numero = leia.questionInt("Digite um número (ou 0 para sair): ")

    if (numero > 0 && numero % 3 === 0) {// verifica se é positivo e múltiplo de 3
        soma += numero // soma = soma + numero (adiciona então o valor à soma)
        contador++ // aumenta o contador
        multiplosPositivos.push(numero) // guarda o número no vetor
    }
}
while (numero !== 0) // continua no laço até o usuário digitar 0

// calculando a média
if (contador > 0) { // garante que não haverá divisão por 0 e verifica se pelo menos um número múltiplo de 3 foi digitado

    let media = soma / contador

    console.log("\nNúmeros digitados positivos e múltiplos de 3:", multiplosPositivos.join(", "))
    console.log(`\nA média dos números múltiplos de 3 e positivos é: ${media.toFixed(2)}`)
}
else { // caso nenhum número múltiplo de 3 tenha sido digitado
    console.log("Nenhum número múltiplo de 3 foi digitado.")
}