var agora = new Date()  //Criação da variável e chamado da função
var hora = agora.getHours() //Atribuição da variável a hora atual através do "getHours"
console.log(`Agora são ${hora} horas`)
if (hora <12){
    console.log('Bom Dia')
} else if (hora <= 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}