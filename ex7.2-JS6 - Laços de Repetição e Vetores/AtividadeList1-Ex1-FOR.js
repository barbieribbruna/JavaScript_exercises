// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require("readline-sync")

// declarando variáveis + aceita valores com casas decimais
    // diferença entre const e let:
        // const usa-se quando a variável não será reatribuída (não mudará de valor)
        // como os números digitados não mudarão de valor, é melhor usar o const
        // se mudassem (ex: incrementar), o uso de let é melhor
const start = leia.questionFloat("Digite o primeiro número do intervalo: ")

const end = leia.questionFloat("Digite o último número do intervalo: ")

// verifica se os valores digitados são válidos
    // inNaN verifica se não é um número (tanto start quanto end)
    // start >= end garante que o primeiro número seja menor que o segundo
if (isNaN(start) || isNaN(end) || start >= end) { 
    console.log("Intervalo inválido.") // se as condições do if se fizerem presentes, reporta como inválido (não é número, start maior do que end etc)
}

else { // caso os valores sejam válidos, entra nesse bloco 'else'
    
    let isFound = false // verifica se foi encontrado algum número que atenda à condição

    for (let i = start; i <= end; i++) { // for percorre por todos os números do intervalo [start, end], incrementando a cada 'volta'
        
        if (i % 3 === 0 && i % 5 === 0) { //verifica se o número atual é múltiplo de 3 e 5 ao mesmo tempo
            console.log(`No intervalo digitado, ${i} é múltiplo de 3 e 5.`) // exibe o(s) número(s) encontrado(s) que atendam à condição
            isFound = true // atualiza a variável isFound para indicar que pelo menos um número foi encontrado
        }
    }

    if (!isFound) // após o loop, verifica se nenhum número atendeu à condição
        console.log("Nenhum número atende à condição.") // e exibe essa mensagem caso não tenha atendido (ex: não encontrou nenhum múltiplo de ambos os números)

}