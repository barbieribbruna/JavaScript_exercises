// importa a biblioteca para leitura de dados pelo terminal
const leia = require("readline-sync")

// declarando variáveis
let menores21 = 0
let maiores50 = 0
let cont = 0 // contador de quantas idades foram digitadas
const limite = 5 // para evitar um loop eterno de inserção de idade

// entrada, processamento e saída de dados
let idade = leia.questionInt("Digite uma idade (ou um número negativo para encerrar): ") // primeira leitura antes de entrar no while

while (idade >= 0 && cont < limite ) { // o laço se repete enquanto a idade for positiva e o limite não for atingido
    
    if (idade < 21) { // verifica a idade e atualiza o contador correspondente
        menores21++ // +1 ao total de menores de 21 anos
    }

    else if (idade > 50) { // verifica a idade e atualiza o contador correspondente
        maiores50++ // +1 ao total de maiores de 50 anos
    }

    cont++ // incrementa o contador geral de idades digitadas (cont)

    if (cont < limite) { // se ainda não atingido o limite
    idade = leia.questionInt("Digite outra idade (ou um número negativo para encerrar): ") // digita-se outra idade
    }
}

if (cont === limite) { 
    console.log("\nEncerrado por limite de segurança.") // se o limite de entrada for atingido, encerra o programa por segurança
}

// exibição do resultado final
console.log(`\nTotal de pessoas menores de 21 anos: ${menores21}`)
console.log(`Total de pessoas maiores de 50 anos: ${maiores50}`)