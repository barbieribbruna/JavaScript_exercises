import * as readlineSync from "readline-sync"

let numeros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6] // cria um array de números inteiros com 10 valores pré-definidos

console.log("Array:") // mostra o array completo com seus respectivos índices

for (let i = 0; i < numeros.length; i++) { // percorre todo o array mostrando índice e valor
    console.log(`${i} -> ${numeros[i]}`)
}

const numeroProcurado = readlineSync.questionInt("\nDigite o número que você deseja encontrar: ") //solicita o número a ser buscado

const posicao = numeros.indexOf(numeroProcurado) // procura o número dentro do array e indexOf retorna a posição do número encontrado ou -1 se não existir

if (posicao !== -1) { // verifica se o número foi encontrado
    console.log(`O número ${numeroProcurado} está localizado na posição ${posicao}`) // mostra a posição, caso encontrado
}
else {
    console.log(`O número ${numeroProcurado} não foi encontrado.`)
}