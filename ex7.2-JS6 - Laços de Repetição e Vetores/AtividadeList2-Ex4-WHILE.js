// importa a biblioteca para leitura de dados pelo terminal
const leia = require("readline-sync")
const fs = require("fs")

// declarando variáveis
let idade = 0
let genero = 0
let area = 0
let continuar = ""

// contadores de acumuladores
let totalBackend = 0
let totalMulheresFront = 0
let totalHomensMobile40mais = 0
let totalNBFullStack30menos = 0
let totalPessoas = 0
let somaIdades = 0

// em todas as opções que for necessária a validação do número digitado, é aqui que será executado
function lerOpecaoInt (pergunta, min, max) { // define uma função que valida a opção digitada

    while (true) { // o laço while se repete até uma opção válida ser informada
        const valor = leia.questionInt(pergunta) // lê um inteiro com a mensagem fornecida

        if (valor >= min && valor <= max) // se estiver no intervalo permitido, retorna
            return valor

        console.log(`Opção inválida. Digite um número entre ${min} e ${max}`) // caso contrário, avisa e pergunta de novo o número
    }
}

// funções auxiliares

// mostra menu de gênero e retorna a opção escolhida
function mostrarMenuGenero() {
    console.log(`
        Identidade de Gênero:
        1 - Mulher Cis
        2 - Homem Cis
        3 - Não Binário
        4 - Mulher Trans
        5 - Homem Trans
        6 - Outros    
    `)
    return lerOpecaoInt ("Escolha um número de 1 a 6): ", 1, 6)
}

// mostra menu de área e retorna a opção escolhida
function mostrarMenuArea(){
    console.log(`
        Área da Pessoa Desenvolvedora:
        1 - BackEnd
        2 - FrontEnd
        3 - Mobile
        4 - FullStack    
    `)
    return lerOpecaoInt ("Escolha um número de 1 a 4): ", 1, 4)
}

// entrada + processamento

while (true) {
    console.clear() // limpa a tela a cada nova pessoa
    console.log(`\n----- Cadastro do Colaborador ${totalPessoas + 1} -----\n`)


idade = leia.questionInt("Digite a idade: ")
genero = mostrarMenuGenero()
area = mostrarMenuArea()

totalPessoas++ // +1 ao total de participantes
somaIdades += idade // acumula idade informada para calcular a média

    // pessoas desenvolvedoras BackEnd
    if (area === 1) {
        totalBackend++
    }

    // mulheres cis ou trans em FrontEnd
    if ((genero === 1 || genero === 4) && area === 2) {
        totalMulheresFront++
    }

    // homens cis ou trans em Mobile maiores de 40 anos
    if ((genero === 2 || genero === 5) && area === 3 && idade > 40) {
        totalHomensMobile40mais
    }

    // não binários em FullStack menores de 30 anos
    if (genero == 3 && area === 4 && idade < 30) {
        totalNBFullStack30menos++
    }

    continuar = leia.question("Deseja cadastrar outro colaborador? (Y/N): ").trim().toUpperCase() // lê o texto livre para decidir se continua

    if (continuar != "Y") {
        break //sai do laço de o usuário digitar 'N'
    }
}

// saída de dados
const mediaIdades = totalPessoas > 0 // evita divisão por 0
    ? (somaIdades / totalPessoas) // calcula a média se houver participantes
    : 0 // se não houver, a média é 0

// cálculo de percentuais
const percBackend = ((totalBackend / totalPessoas) * 100).toFixed(1)
const percFront = ((totalMulheresFront / totalPessoas) * 100).toFixed(1)
const percMobile = ((totalHomensMobile40mais / totalPessoas) * 100).toFixed(1)
const percFull = ((totalNBFullStack30menos / totalPessoas) * 100).toFixed(1)

// imjpressão no terminal
console.clear()
console.log()

// resultados da pesquisa
console.log(`Total de pessoas desenvolvedoras Backend: ${totalBackend} (${percBackend}%)`)
console.log(`Total de Mulheres (Cis/Trans) em Frontend: ${totalMulheresFront} (${percFront}%)`)
console.log(`Total de Homens (Cis/Trans) em Mobile com mais de 40 anos: ${totalHomensMobile40mais} (${percMobile}%)`)
console.log(`Total de Não Binários em FullStack com menos de 30 anos: ${totalNBFullStack30menos} (${percFull}%)`)
console.log(`\nTotal geral de participantes: ${totalPessoas}`)
console.log(`Média de idade dos participantes: ${mediaIdades.toFixed(2)} anos`)

// perfil médio
if (mediaIdades < 25) {
  console.log("Perfil médio: Jovem Desenvolvedor(a)");
} else if (mediaIdades <= 40) {
  console.log("Perfil médio: Adulto(a) Experiente");
} else {
  console.log("Perfil médio: Sênior / Especialista");
}

const relatorio = `
    ********** Resultados da Pesquisa **********

    Total de pessoas desenvolvedoras Backend: ${totalBackend} (${percBackend}%) // é o resultado de todas as pessoas backend
    Total de Mulheres (Cis/Trans) em Frontend: ${totalMulheresFront} (${percFront}%) // é o resultado de todas as mulheres frontend
    Total de Homens (Cis/Trans) em Mobile com mais de 40 anos: ${totalHomensMobile40mais} (${percMobile}%) // é o resultado de todos os homens mobile 40+
    Total de Não Binários em FullStack com menos de 30 anos: ${totalNBFullStack30menos} (${percFull}%) // é o resultado de todos nb fullstack -30

    Total geral de participantes: ${totalPessoas}
    Média de idade dos participantes: ${mediaIdades.toFixed(2)} anos
`

fs.writeFileSync("resultado_pesquisa.txt", relatorio); // cria/atualiza arquivo .txt
console.log("\nResultados também salvos no arquivo 'resultado_pesquisa.txt'.")


