import * as readlineSync from "readline-sync"

let cores: string[] = [] // cria um array vazio de strings para armazenar as cores

for (let i = 1; i <= 5; i++) { // roda o código 5 vezes e adiciona cada cor digitada ao array
    const entrada = readlineSync.question(`Digite a ${i}ª cor: `)
    const cor = entrada.trim().toLowerCase() // remove espaços em branco e converte caracteres da string para minúsculas
    cores.push(cor) // adiciona a cor tratada no array
}

console.log("\nListar todas as cores:") // exibe as cores na ordem em que foi digitada

for (const cor of cores) { // percorre o array 'cores', pega um elemento por vez, e guarda na variável 'cor'
    console.log(cor) // imprime a cor digitada
}

const coresOrdenadas = [...cores].sort() // cria uma nova constante chamada 'coresOrdenadas', que recebe uma cópia do array 'cores', ordenada em ordem alfabética (sort)

console.log("\nOrdenar as cores:")

for (const cor of coresOrdenadas) { //mostra as cores em ordem crescente
    console.log(cor)
}