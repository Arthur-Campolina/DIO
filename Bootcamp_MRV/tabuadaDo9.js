var numero = 0;
var multiplicador = 9;


for (let i = 0; i <= 10; i++) {
    if (numero <= i) {
        var resultado = numero * multiplicador;
        console.log(numero + " x " + multiplicador + " = " + resultado + ".");
        numero = numero + 1;
    } 
}