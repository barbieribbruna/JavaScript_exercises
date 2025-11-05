import { Stack } from "./Stack"
import readlineSync from "readline-sync"

const pilha = new Stack<string>()
let opcao: number

do {
  console.log("\n--------------------------------")
  console.log(" 1 - Adicionar um livro à pilha.")
  console.log(" 2 - Exibir a lista de todos os livros.")
  console.log(" 3 - Livro lido (remover da pilha).")
  console.log(" 4 - Buscar por um livro na pilha.")
  console.log(" 5 - Ver o total de livros na pilha.")
  console.log(" 0 - Sair.")
  console.log("--------------------------------")

  opcao = readlineSync.questionInt("Digite uma opção válida: ")

  switch (opcao) {
    case 1: {
      const livro = readlineSync.question("Digite o nome do livro: ")
      pilha.push(livro)
      console.log("\nLista atual da pilha de livros:")
      pilha.printStack()          // topo -> base
      console.log(`\nO livro "${livro}" foi adicionado à pilha.\n`)

      const frases = [
        "Parabéns pelo livro adicionado. Boa leitura!"
      ]

      const frase = frases[Math.floor(Math.random() * frases.length)]
      console.log(frase)

      break
    }

    case 2: {
      if (pilha.isEmpty()) {
        console.log("\nA pilha está vazia nesse momento.")
      } else {
        console.log("\nLista atual da pilha de livros:")
        pilha.printStack()
      }
      break
    }

    case 3: {
      if (pilha.isEmpty()) {
        console.log("\nNada para exluir. A pilha está vazia.")
      } else {
        const removido = pilha.pop()      // pega o livro que saiu
        console.log("\nLista atual da pilha de livros:")
        pilha.printStack()
        console.log(`\nO livro "${removido}" foi excluído da pilha.`)
      }
      break
    }

    case 4: {
      if (pilha.isEmpty()) {
        console.log("\nA pilha está vazia! Não há livros para buscar.")
      } else {
        // console.log("\nLista atual da pilha de livros:")
        // pilha.printStack()

        const nomeBusca = readlineSync.question("\nDigite o nome do livro para buscar: ")

        if (pilha.contains(nomeBusca)) {
          console.log(`\nO livro "${nomeBusca}" está na pilha!`)
        } else {
          console.log(`\nO livro "${nomeBusca}" não foi encontrado.`)
        }
      }
      break
    }

    case 5: {
      console.log(`\nHá ${pilha.count()} livro(s) na pilha.`)
      break
    }

    case 0:
      console.log("\nPrograma finalizado!")
      break

    default:
      console.log("\nOpção inválida! Tente novamente.")
  }
} while (opcao !== 0)