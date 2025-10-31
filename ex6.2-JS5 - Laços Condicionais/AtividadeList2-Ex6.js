// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require("readline-sync")

// declarando variáveis
let nome, codigoCargo, salario, cargo, reajuste, novoSalario

// entrada de dados
console.log("Empresa XPTO\n")
console.log("Código do Cargo (1) / Nome do cargo: Gerente / Ajuste de 10%")
console.log("Código do Cargo (2) / Nome do cargo: Vendedor / Ajuste de 7%")
console.log("Código do Cargo (3) / Nome do cargo: Supervisor / Ajuste de 9%")
console.log("Código do Cargo (4) / Nome do cargo: Motorista / Ajuste de 6%")
console.log("Código do Cargo (5) / Nome do cargo: Estoquista / Ajuste de 5%")
console.log("Código do Cargo (6) / Nome do cargo: Técnico de TI / Ajuste de 8%")

console.log("\nDigite o nome do colaborador: ")
nome = leia.question()

console.log("Digite o código do cargo (1 a 6): ")
codigoCargo = leia.questionInt()

console.log("Digite o salário atual: R$ ")
salario = leia.questionFloat()

// processamento e saída de dados
switch (codigoCargo) {
    case 1:
        cargo = "Gerente"
        reajuste = 0.10
        break

    case 2:
        cargo = "Vendedor"
        reajuste = 0.07
        break

    case 3:
        cargo = "Supervisor"
        reajuste = 0.09
        break

    case 4:
        cargo = "Motorista"
        reajuste = 0.06
        break

    case 5:
        cargo = "Estoquista"
        reajuste = 0.05
        break

    case 6:
        cargo = "Técnico de TI"
        reajuste = 0.08
        break
    
    default:
        console.log("Código inválido. Digite um número de 1 a 6.")
        reajuste = 0
}

novoSalario = salario + (reajuste * salario)

console.log("\nNome do colaborador: " + nome)
console.log("Cargo: " + cargo)
console.log(nome + ", o seu salário após o reajuste é de R$" + novoSalario.toFixed(2) + ".")