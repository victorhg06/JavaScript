function verificar(){
    var data = new Date()  //Necessário para variáveis de data
    var ano = data.getFullYear();  //Necessário para pegar o ano atual "FullYear" é para pegar com 4 dígitos
    var fano = window.document.getElementById('txtano'); //Aqui é para pegar o ano digitado na caixa do formulário
    var res = window.document.getElementById('res'); //Aqui estou pegando uma variável para a div resultado
    if (fano.value.length <4 || fano.value > ano){  //"ano" é 2024
        window.alert ('Erro, verifique os dados e tente novamente!!!')
        /*Essa condição é para que se o "fano" possuir um tamanho igual a 0 ou maior que 4(aaaa), então mandará uma mensagem ao usuário mandando-o verificar os dados */
    } else{
        var fsex = document.getElementsByName('radsex') //Note que o seletor foi "ByName" e não "ById"
        /* [0] é para masculino e [1] para feminino  */
        var idade = ano - Number(fano.value) // Valor do ano atual menos o valor digitado dentro do formulário
        var genero = '' //Aqui coloquei uma string vazia, pois depende do que for digitado pelo usuário
        var img = document.createElement('img'); //Aqui é necessário para para criar imagens dinâmicas em JS
            img.setAttribute('id', 'foto'); //Aqui precio criar uma "id" para ela
        if (fsex[0].checked){  //Se o gênero marcado(checado) for [0], atribuo a string Homem
            genero = 'Homem'
            if (idade >=0 && idade < 4){
                //Bebe
                img.setAttribute('src',"bebezinhon.png")
            }else if (idade >=4 && idade < 12){
                //Criança
                img.setAttribute('src',"menininhon.png")
            }else if(idade <21){
                //Jovem
                img.setAttribute('src',"meninon.png")
            }else if (idade < 45){
                //Adulto
                img.setAttribute('src',"homemn.png")
            } else{
                //Idoso
                img.setAttribute('src',"senhorn.png")
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 4){
                //Bebe
                img.setAttribute('src',"bebezinhan.png")
            }else if (idade >=4 && idade < 12){
                //Criança
                img.setAttribute('src',"menininhan.png")
            }else if(idade <21){
                //Jovem
                img.setAttribute('src',"meninan.png")
            }else if (idade < 45){
                //Adulta
                img.setAttribute('src',"mulhern.png")
            } else{
                //Idosa
                img.setAttribute('src',"senhoran.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //Esse comando é necessário para que a imagem apareça abaixoo da mensagem digitada acima
    }

}
