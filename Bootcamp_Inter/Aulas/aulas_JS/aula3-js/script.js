function comparacao (n1, n2) {

    var n1 = Number(prompt('Insira o primeiro número:'));
    var n2 = Number(prompt('Insira o segundo número:'));
    var soma = Number(n1 + n2);

    if (!n1 || !n2) {
        alert('Erro - insira um número!');
        comparacao();
    } else {
        n1 == n2 ? (alert('Os números ' + n1 + ' e ' + n2 + ' são iguais!')) : (alert('Os números ' + n1 + ' e ' + n2 + ' não são iguais!'));
        alert('Sua soma é: ' + soma);
        soma > 10 ? (alert('Que é maior que 10')) : (alert('Que é menor que 10'));
        soma < 20 ? (alert('e é menor que 20.')) : (alert('e é maior que 20.'));
    }

    var repetir = Number(prompt("Deseja repetir?\n 1 - sim\n 2 - não"));

    if (repetir == 1) {
        comparacao();
    } else if (!repetir || repetir > 2) {
        alert('Erro - insira um número válido')
        repetir;
    } else {
        alert('Até mais!')
    }
}

comparacao();