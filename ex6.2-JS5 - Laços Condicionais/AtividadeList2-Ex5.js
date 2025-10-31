// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require("readline-sync")

// declarando variáveis
let codigoProduto
let quantidade

let produto
let precoUnitario
let valorTotal

// entrada de dados

console.log("Bem-vindo(a)s ao menu da nossa lanchonete! \n")
console.log("Opção (1): Cachorro Quente - R$10.00")
console.log("Opção (2): X-Salada - R$15.00")
console.log("Opção (3): X-Bacon - R$18.00")
console.log("Opção (4): Bauru - R$12.00")
console.log("Opção (5): Refrigerante - R$8.00")
console.log("Opção (6): Suco de laranja - R$13.00")

console.log("\nDigite a opção desejada: ")
codigoProduto = leia.questionInt()

console.log("Digite a quantidade comprada: ")
quantidade = leia.questionInt()

// processamento e saída de dados

switch (codigoProduto) {
    case 1:
        produto = "Cachorro Quente"
        precoUnitario = 10.00
        break

    case 2:
        produto = "X-Salada"
        precoUnitario = 15.00
        break

    case 3:
        produto = "X-Bacon"
        precoUnitario = 18.00
        break

    case 4:
        produto = "Bauru"
        precoUnitario = 12.00
        break

    case 5:
        produto = "Refrigerante"
        precoUnitario = 8.00
        break

    case 6:
        produto = "Suco de Laranja"
        precoUnitario = 13.00
        break

    default:
        produto = "Código inválido. Digite uma opção de 1 a 6."
        precoUnitario = 0
        break
}

valorTotal = quantidade * precoUnitario
console.log("\nProduto: " + produto)
console.log("Valor total: R$ " + valorTotal.toFixed(2))






















/*// entrada de dados
console.log("Digite o código do produto (1 a 6): ")
codigoProduto = leia.questionInt() // a informação será lida e guardada na variável codigoProduto

console.log("Digite a quantidade comprada desse produto: ")
quantidade = leia.questionInt() // a informação será lida e guardada na variável quantidade

// calcular o valor total
valorTotal = quantidade * precoUnitario

// processamento e saída de dados
switch (codigoProduto) {
    case 1:
        produto = "Cachorro Quente"
        precoUnitario = 10.00
        break
    
    case 2:
        produto = "X-Salada"
        precoUnitario = 15.00
        break
    
    case 3:
        produto = "X-Bacon"
        precoUnitario = 18.00
        break

    case 4:
        produto = "Bauru"
        precoUnitario = 12.00
        break

    case 5:
        produto = "Refrigerante"
        precoUnitario = 8.00
        break

    case 6:
        produto = "Suco de laranja"
        precoUnitario = 13.00
        break
}






saída: valorTotal.toFixed(2) // toFixed(2) mostra o resultado com duas casas decimais*/
