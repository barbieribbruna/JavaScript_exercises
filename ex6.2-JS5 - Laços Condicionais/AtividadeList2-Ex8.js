// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require("readline-sync")

// declarando variáveis
let saldo = 1000.00
let codigoOperacao, valor, operacao

// entrada de dados
console.log("----- Conta Bancária -----\n")
console.log("1 - Saldo")
console.log("2 - Saque")
console.log("3 - Depósito\n")

console.log("Digite o código da operação (1 a 3): ")
codigoOperacao = leia.questionInt()

// processamento e saída de dados
switch (codigoOperacao) {
    case 1:
        operacao = "Saldo"
        console.log("Seu saldo atual é de R$ " + saldo.toFixed(2))
        break

    case 2:
        operacao = "Saque"
        console.log("Digite o valor do saque: R$ ")
        valor = leia.questionFloat()

            // verificar saldo (in)suficiente
            switch (valor > saldo) {
                case true:
                    console.log("Saldo insuficiente.")
                    break

                case false:
                    saldo = saldo - valor
                    console.log("Seu novo saldo é de R$ " + saldo.toFixed(2))
                    break
            }
        break

    case 3:
        operacao = "Depósito"
        console.log("Digite o valor do depósito: R$ ")
        valor = leia.questionFloat()
        saldo = saldo + valor
        console.log("Seu saldo atual é de R$ " + saldo.toFixed(2))
        break

    default:
        console.log("\nOperação inválida. Digite um número de 1 a 3.")
        break
}