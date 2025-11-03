import * as readlineSync from "readline-sync"

const setNumeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]) // cria e inicializa o Set com 10 valores inteiros e não repetidos

console.log("=== PROGRAMA DE BUSCA EM COLLECTION SET ===")

console.log(`O Set contém ${setNumeros.size} números diferentes.\n`) // diz qual é o tamanho do Set

while (true) { // permite múltiplas buscas até o usuário decidir sair ou o número for encontrado
    const numeroBuscado: number = readlineSync.questionInt("Digite o número que você deseja encontrar (ou -1 para sair): ")

    if (numeroBuscado === -1) { // se o usuário digitar -1, o programa encerra
        console.log("\nEncerrando o programa. Obrigado por utilizar!")
        break
    }

    if (setNumeros.has(numeroBuscado)) { // se o número digitado for encontrado
        console.log(`✅ O número ${numeroBuscado} foi encontrado!\n`)
    }
    else {
        console.log(`❌ O número ${numeroBuscado} não foi encontrado!\n`) // ou se o número digitado não for encontrado
  }
}