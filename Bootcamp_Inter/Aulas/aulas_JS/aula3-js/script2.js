function comparaNumeros(n1, n2) {
    if (!n1 || !n2) {
        return 'Erro - escolha dois números';
    } else {
        const primeiraFrase = criaPrimeiraFrase(n1, n2);
        const segundaFrase = criaSegundaFrase(n1, n2);
        return `${primeiraFrase} ${segundaFrase}`;
    }
}

function criaPrimeiraFrase(n1, n2) {
    let saoIguais;
    if (n1 !== n2) {
        saoIguais = 'não'
    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(n1, n2) {
    const soma = n1 + n2;
    let result10 = 'menor';
    let result20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        result10 = 'maior';
    }

    if (compara20) {
        result20 = 'maior';
    }
    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20`;
}

console.log(comparaNumeros(5,15));
