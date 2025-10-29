// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declarando variáveis
let salario
let abono
let NovoSalario

// entrada de dados
console.log("Digite o valor do salário: R$ ")
salario = leia.questionFloat()

console.log("Digite o valor do abono: R$ ")
abono = leia.questionFloat()

// processamento de dados
NovoSalario = salario + abono

// saída de dados
console.log("\nO seu novo salário é de R$ " + NovoSalario.toFixed(2)) // toFixed(2) mostra o resultado com duas casas decimais

