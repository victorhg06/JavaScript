function contar() {
    var ini = window.document.getElementById('txtini');
    var fim = window.document.getElementById('txtfim');
    var passo = window.document.getElementById('txtpasso');
    var res = window.document.getElementById('res');

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {  /*Feito para que se caso não haja preenchimento nas variáveis, mande uma mensagem de alerta para o cliente*/
        window.alert('Erro! Faltam dados')
    }else{
        res.innerHTML = 'Contando: '
        var i = Number(ini.value) //É necessário colocar o "value", é necessário para acessar o valor que o usuário digitou
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){ // Caso o passo for zero ou negativo ele considerará o "1"
            window.alert('Passo Inválido ! Considerando PASSO 1')
            p = 1
        }
        /*Necessário criar essas variáveis para converter as primeiras que estão como string em Number, seus nomes são os mesmos das originais: i de ini; f de fim e p de passo*/

        //Criarei uma estrutura "for" aqui embaixo:
        if (i < f) { // Se o valor início for menor que o final, uso este código Contagem Crescente
            for(var c= i; c<= f; c+= p) {    //O "c" é o contador da estrutura
            res.innerHTML += `${c} \u{1F449}	`   /*O sinal "+=" é para concatenar(juntar) os resultados, pois sem ele apareceria apenas o último número da contagem e não todos e o código ao lado é o símbolo do emoji*/
        }
        res.innerHTML += `\u{1F3C1}`  // Aqui foi para mostrar a banderinha no emoji
        }else{ // Aqui devo fazer um código caso o número do início seja maior que o do final   Contagem Regressiva
            for(var c = i; c >= f; c -= p) {  //"-=" é o decremento
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
    
}