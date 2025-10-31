// acessando a biblioteca instalada, passando as informações dela para a const leia
const leia = require("readline-sync")

// declarando variáveis
let tipo
let classe
let alimentacao
let animal

// entrada de dados
console.log("Qual é o tipo do animal? (Ex.: Vertebrado / Invertebrado)")
tipo = leia.question().toLowerCase().trim()

console.log("\nQual é a classe do animal? (Ex.: Ave / Mamífero / Inseto / Anelídeo)")
classe = leia.question().toLowerCase().trim()

console.log("\nQual é a alimentação do animal? (Ex.: Carnívoro / Onívoro / Herbívoro / Hematófago)")
alimentacao = leia.question().toLowerCase().trim()

// após problemas com acentuação, pesquisei essa forma de rodar o código de forma funcional e com/sem acentos e/ou digitar só o começo)
    // tipo do animal
if (tipo.startsWith("ver")) tipo = "vertebrado"
else if (tipo.startsWith("inv")) tipo = "invertebrado"

    // classe do animal
if (classe.startsWith("ave")) classe = "ave"
else if (classe.startsWith("mam")) classe = "mamifero"
else if (classe.startsWith("ins")) classe = "inseto"
else if (classe.startsWith("ane")) classe = "anelideo"

    // alimentação do animal
if (alimentacao.startsWith("car")) alimentacao = "carnivoro"
else if (alimentacao.startsWith("oni")) alimentacao = "onivoro"
else if (alimentacao.startsWith("her")) alimentacao = "herbivoro"
else if (alimentacao.startsWith("hem")) alimentacao = "hematofago"

// processamento e saída de dados
if (tipo === "vertebrado" && classe === "ave" && alimentacao === "carnivoro")
    animal = "Águia"

else if (tipo === "vertebrado" && classe === "ave" && alimentacao === "onivoro")
    animal = "Pomba"

else if (tipo === "vertebrado" && classe === "mamifero" && alimentacao === "onivoro")
    animal = "Homem"

else if (tipo === "vertebrado" && classe === "mamifero" && alimentacao === "herbivoro")
    animal = "Vaca"

else if (tipo === "invertebrado" && classe === "inseto" && alimentacao === "hematofago")
    animal = "Pulga"

else if (tipo === "invertebrado" && classe === "inseto" && alimentacao === "herbivoro")
    animal = "Lagarta"

else if (tipo === "invertebrado" && classe === "anelideo" && alimentacao === "hematofago")
    animal = "Sanguessuga"

else if (tipo === "invertebrado" && classe === "anelideo" && alimentacao === "onivoro")
    animal = "Minhoca"

else
    animal = "Animal não encontrado"

// Saída
console.log("\nAnimal escolhido: " + animal)



