function calcularChurrasco(){
    var homens = document.getElementById('homem').value;
    var mulheres = document.getElementById('Mulheres').value;
    var crianças = document.getElementById('Crianças').value;

    homens = parseInt(homens);
    mulheres = parseInt(mulheres);
    crianças = parseInt(crianças);

    //Total de carne bovina
    var bovh = homens * 0.5;
    var bovm = mulheres * 0.3;
    var bovc = crianças * 0.2;
    bovtot = bovh + bovm + bovc;

    //Total frango
    var frangh = homens * 0.2;
    var frangm = mulheres * 0.2;
    var frangc = crianças * 0.1;
    frangtot = frangh + frangm + frangc;

    //Total Linguiça
    var lingh = homens * 0.2;
    var lingm = mulheres * 0.2;
    var lingc = crianças * 0.2;
    lingtot = lingh + lingm + lingc;

    //Total refrigerante
    var refh = homens * 0.3;
    var refm = mulheres * 0.4;
    var refc = crianças * 0.2;
    reftot = refh + refm + refc;

    //Total de cerveja
    var cervh = homens * 0.8;
    var cervm =mulheres * 0.5;
    cervtot = cervh + cervm;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<ol>
        <ul><p> Total de Carne necessária: ${bovtot.toFixed(2)} kg</p></ul>
        <ul><p> Total de Frango necessária: ${frangtot.toFixed(2)} kg</p></ul>
        <ul><p> Total de Linguiça necessária: ${lingtot.toFixed(2)} kg</p></ul>
        <ul><p> Total de Refrigerante necessária: ${reftot.toFixed(1)} Litros</p></ul>
        <ul><p> Total de Cerveja necessária: ${cervtot.toFixed(1)} Litros</p></ul>
    </ol>`;

}



//<p> Total de carne necessária: ${bovtot.toFixed(2)} kg</p>