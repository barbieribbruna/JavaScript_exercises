// importa a biblioteca para leitura de dados pelo terminal
const leia = require("readline-sync")

// declaração de variáveis/constantes
const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

// loop para permitir várias buscas
while (true) {
    let numeroProcurado = leia.questionInt("Digite o número que você deseja encontrar (ou um número negativo para sair): ")


    // encerra o programa se o número for negativo
    if (numeroProcurado < 0) {
        console.log("Programa encerrado.")
        break
    }

// busca o número no vetor e guarda a posição
let posicaoEncontrada = vetor.indexOf(numeroProcurado)

// mostra o resultado na tela
    if (posicaoEncontrada !== -1) {
        console.log(`O número ${numeroProcurado} está localizado na posição ${posicaoEncontrada}`)
    }
    else {
        console.log(`O número ${numeroProcurado} não foi encontrado.`)
    }
    console.log()
}