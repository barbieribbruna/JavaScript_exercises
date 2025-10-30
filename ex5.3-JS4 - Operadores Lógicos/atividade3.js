// importando a biblioteca
const leia = require('readline-sync') // acessa a biblioteca instalada, passando as informações dela para a const leia

// declarando variáveis
let salarioBruto, adicionalNoturno, horasExtras, descontos, salarioLiquido

// entrada de dados
console.log("Digite seu salário bruto: R$ ")
salarioBruto = leia.questionFloat()

console.log("Digite o valor do adicional noturno: R$ ")
adicionalNoturno = leia.questionFloat()

console.log("Digite a quantidade de horas extras: ")
horasExtras = leia.questionFloat()

console.log("Digite o valor dos descontos: R$ ")
descontos = leia.questionFloat()

// processamento de dados
salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

// saída de dados
console.log("\nO valor do seu salário líquido é R$ " + salarioLiquido.toFixed(2)) // toFixed(1) mostra o resultado com duas casas decimais