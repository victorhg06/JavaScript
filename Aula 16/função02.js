function soma(n1=0, n2=0){ /* Aqui eu fiz com que se caso não passar um número para n1 ou n2 ele valerá 0, caso não seja passado um valor. Caso não fizesse isso, ele retornaria "NaN" */
    return n1 + n2
}
let res = soma(5, 5)
console.log(res)