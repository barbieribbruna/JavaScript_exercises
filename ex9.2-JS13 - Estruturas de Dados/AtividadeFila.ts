import { Queue } from "./Queue"

import readlineSync from "readline-sync"

const fila = new Queue<string>()
let opcao

const clientesIniciais: string[] = ["Nico", "Teca", "Luca", "Rico", "Lolo"]

for (const cliente of clientesIniciais) {
    fila.enqueue(cliente)
}

console.log("Fila inicial de clientes já existentes:")
fila.printQueue()

do {

    console.log("\n-----------------------------------")
    console.log(" 1 - Adicionar cliente à fila de espera.")
    console.log(" 2 - Exibir a lista de clientes à espera na fila.")
    console.log(" 3 - Próximo cliente a ser chamado + Excluir da lista de espera após atendimento.")
    console.log(" 0 - Sair.")
    console.log("-----------------------------------")

    opcao = readlineSync.questionInt("Digite uma opção: ")

    switch (opcao) {
        case 1:
            const nome = readlineSync.question("Digite o nome a ser adicionado: ")
            fila.enqueue(nome)
            console.log("\nFila:")
            fila.printQueue()
            console.log(`\nCliente "${nome}" adicionado com sucesso!`)
            break

        case 2:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!")
            } else {
                console.log("\nLista atualizada de clientes à espera na fila:")
                fila.printQueue()
            }
            break

        case 3:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia! Ninguém para chamar.")
            } else {
                const clienteChamado = fila.dequeue()
                console.log(`\nO cliente "${clienteChamado}" foi chamado e excluído da fila!`)
                console.log("\nFila atualizada:")
                fila.printQueue()
            }
            break

        case 0:
            console.log("\nPrograma finalizado.")
            break

        default:
            console.log("\nOpção inválida! Tente novamente.")
    }

} while (opcao !== 0)







