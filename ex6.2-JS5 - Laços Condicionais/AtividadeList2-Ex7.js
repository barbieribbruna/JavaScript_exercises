// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require("readline-sync")

// declarando variáveis
let numero1, numero2, codigoOperacao, simbolo, resultado

// entrada de dados
console.log("----- Calculadora Simples -----\n")
console.log("1 - Soma (+)")
console.log("2 - Subtração (-)")
console.log("3 - Multiplicação (*)")
console.log("4 - Divisão (/)\n")

console.log("Digite o 1º número: ")
numero1 = leia.questionFloat()

console.log("Digite o 2º número: ")
numero2 = leia.questionFloat()

console.log("Digite o código da operação desejada (1 a 4): ")
codigoOperacao = leia.questionInt()

// processamento e saída de dados
switch (codigoOperacao) {
    case 1:
        simbolo = "+"
        resultado = numero1 + numero2
        break

    case 2:
        simbolo = "-"
        resultado = numero1 - numero2
        break

    case 3:
        simbolo = "*"
        resultado = numero1 * numero2
        break

    case 4:
        simbolo = "/"
        resultado = numero1 / numero2
        break
   
    default:
        console.log("Código da operação inválido. Digite um número de 1 a 4.")
}

console.log (
    
    resultado != null // exibe o resultado apenas se 'resultado' não for nulo
    ? "\n" + numero1 + " " + simbolo + " " + numero2 + " = " + resultado.toFixed(2)
    : ""
    // operador "?" para escolher o que mostrar
    // se tiver resultado, mostra a conta com 2 casas decimais
    // se não tiver resultado, não mostra nada
)