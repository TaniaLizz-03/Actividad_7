function operacion(numero1, numero2){
return numero1 + numero2;
}

console.log(operacion(2, 3));

const operacionFlechita = () => {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    operacion = document.getElementById('operacion').value;

    if (operacion == 1) {
        var resultado2 = parseInt(valor1) + parseInt(valor2);
    }
    if (operacion == 2) {
        var resultado2 = parseInt(valor1) - parseInt(valor2);
    }
    if (operacion == 3) {
        var resultado2 = parseInt(valor1) * parseInt(valor2);
    }

    document.getElementById('resultado').innerHTML = resultado2;
}
