import * as readlineSync from "readline-sync"

const setNumeros: Set<number> = new Set<number>() // cria uma collection do tipo Set para números - Set<number> guarda apenas valores únicos

console.log("Digite 10 valores inteiros (repetidos não serão exibidos):") // entrada de informação

for (let i = 1; i <= 10; i++) { // loop de 10 vezes, incrementando a cada loop
    const valor: number = readlineSync.questionInt(`Valor ${i}: `) // lê um número inteiro e, se inválido, volta a perguntar
    setNumeros.add(valor) // adiciona o número ao Set e, se for repetido, apenas ignora (não duplica)
}

console.log("\nListar dados do Set:")

Array.from(setNumeros) // converte o Set em um array normal
    .sort((a, b) => a - b) // ordena numericamente os elementos do array, em ordem crescente (em regra, compara strings, mas a função '(a, b) => a - b' garante a comparação numérica) 
    .forEach((n) => console.log(n)) // percorre cada elemento do array (agora ordenado) e executa o console.log(n) para cada número (imprime um número por linha)