var num = [5, 8, 2, 9, 3]
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O comprimento do nosso array é de ${num.length}`)  // Para ver a quantidade de posições
/*console.log(`Nossos elementos em ordem crescente são ${num.sort()}`)*/ // Para por em ordem crescente
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) /* Criei uma variável "pos" para que a função "indexOf" bsque o valor entre parenteses desejado, caso não exista o valor digitado o programa retornará "-1" */
console.log(`O valor 4 está na posição ${pos}`)
