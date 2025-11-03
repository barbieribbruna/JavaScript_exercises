// importa a biblioteca para leitura de dados pelo terminal
const leia = require("readline-sync")

// declarando variáveis contadoras
let par = 0
let impar = 0

// processamento de dados
for (let i = 1; i <= 10; i++) { // lê 10 números
    const num = leia.questionInt(`Digite o ${i}º número: `) // const num pq ele não será reatribuído depois de digitado

    if (num % 2 == 0) { // verifica se o número é par ou ímpar
        par++ // se sim, incrementa-se
    }

    else {
        impar++ //se não for par, incrementa-se no ímpar
    }
}

// exibe os resultados
console.log(`\nTotal de números pares: ${par}`)
console.log(`Total de números ímpares: ${impar}`)