var janeiro = 3000;
var feveriro = 1000;
var abril = 2000;
var marco = 3000;
var media = (janeiro + feveriro + abril + marco) / 4;
console.log("A media de vendas nos últimos 4 meses é R$" + media);
if (media >= 5000) {
    console.log("Você receberá uma bonificação de 10%");
} else if (media < 5000 && media >= 3000) {
    console.log("Você receberá uma bonificação de 5%");
} else {
    console.log("Você não receberá bonificação");
}

