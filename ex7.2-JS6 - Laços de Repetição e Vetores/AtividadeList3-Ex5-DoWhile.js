//importa a biblioteca para ler dados pelo terminal
const leia = require("readline-sync")

// declarando variáveis
let somaPositivos = 0
let numero
let positivos = []

// laço do...while para garantir que o bloco execute pelo menos uma vez
do {
    numero = leia.questionInt("Digite um número: ") // entrada de dados quando o usuário digita

    if (numero > 0) { // se o número for positivo, adiciona na soma
        somaPositivos += numero // somaPositivos = somaPositivos + numero
        positivos.push(numero) // guarda o número positivo no vetor   
    }
}
while (numero !== 0) // repete o laço enquanto o número for diferente de 0

// resultado
console.log("\nNúmeros positivos digitados: ", positivos.join(", "))
console.log(`A soma dos números positivos é: ${somaPositivos}`)