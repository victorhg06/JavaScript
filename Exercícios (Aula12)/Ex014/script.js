function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>= 0 && hora < 12){
        //Bom Dia
        img.src = "imagens/manhã.png"  //Aqui vai carregar a imagem de acordo com o horário
        document.body.style.background = "#C1B29D"
    } else if (hora >= 12 && hora <=18){
        //Boa Tarde
        img.src = "imagens/tarde.png"
        document.body.style.background = "#F29727"
    } else{
        //Boa Noite
        img.src = "imagens/noite.png"
        document.body.style.background = "#0F161C"
    }
}