function gerar(){
    var num = window.document.getElementById('txtnum');
    var tab = window.document.getElementById('seltab')  // Foi preciso pegar a área da tabuada
    var res = window.document.getElementById('res');
    if(num.value.length == 0){  // Caso o cliente não digite nenhum número
        window.alert('Digite um número')
    }else {
        var num = Number(num.value)
        var c = 1 // Contador começando em "1"
        tab.innerHTML = " " /* Essa config faz com que no site limpe a última tabuada, caso não tivesse essa config as tabuadas viriam uma embaixo da outra */
        while (c<=10){
            var item = document.createElement('option')  /*Preciso criar essa variável para que dentro do "select" ele me de opções para criar um "option de forma dinâmica. Ao invés de criar a tag "option" no HTML, crio no JS */
            item.text = `${num} X ${c} = ${num*c}`  //Aqui estou configurando a parte de dentro do option, precisa ser entre "crases"
            tab.appendChild(item)  //Aqui faz aparecer a tabuada "appenChild" é adcionar o filho "item"
            c++ // Incremento
        }
    }
}