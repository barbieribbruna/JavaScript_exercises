const leia = require("readline-sync")

const vetor = []

for (let i = 0; i < 10; i++) { // lê 10 números inteiros
    let numero = leia.questionInt(`Digite o ${i + 1} º número: `) // pede o número ao usuário e o armazena em uma variável
    vetor.push(numero) // adiciona o número no final do vetor
}

console.log("\nVetor:", vetor.join(" ")) // mostra o vetor completo na tela e o 'join' junta todos os elementos do vetor em uma única string

let indiceImpar = [] // cria um vetor para guardar números ímpares
for (let i = 0; i < vetor.length; i++){ // verifica elementos nos índices ímpares
    if (i % 2 !== 0) { // se for ímpar
        indiceImpar.push(vetor[i]) // adiciona o valor correspondente ao índice ímpar no novo vetor
    }
}

console.log("\nElementos nos índices ímpares:")
console.log(indiceImpar.join(" "))

let par = []
for (let i = 0; i < vetor.length; i++){
    if (vetor[i] % 2 === 0) {
        par.push(vetor[i])
    }
}

console.log("\nElementos pares:")
console.log(par.join(" "))

let soma = 0 // variável para armazenar a soma

for (let i = 0; i < vetor.length; i++) { // percorre o vetor somando cada elemento
    soma += vetor[i] // soma = soma + vetor [i]
}

let media = soma / vetor.length // calcula a média dividindo a soma pelo total de elementos

// exibe os resultados finais
console.log(`\nSoma: ${soma}`)
console.log(`Media: ${media.toFixed(2)}`)