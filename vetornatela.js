var valores = [8, 4, 1, 7, 2, 9]

/*  Mostrando os valores individualmente, há um problema de fazer um por um, pois se for um vetor muito grande eu precisaria repetir esse código centenas de vezes. Para evitar isso eu devo criar uma estrutura de repetição, de preferencia "for"
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/
var valores = [8, 4, 1, 7, 2, 9]
/*
for (var pos = 0; pos < valores.length; pos++){ //Enquanto o pos for menor que o tamanho do meu vetor, escreverá na tela as posições
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}