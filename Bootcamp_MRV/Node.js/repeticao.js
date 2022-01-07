var numero = 1;
var limite = 10;

for (let i = 0; i <= limite; i++) {
    if (numero <= limite) {
        console.log("Contagem atual: " + numero);
        numero = numero + 1;
    } else {
        console.log ("Estourou o limite!");
    }
}