function positiveNumber(n) {
    
    const negative = n < 0;
    const moreThan50 = n > 50;

    if (n !== Number(n)) {
        return 'Erro - Digite um número'
    } else {
        if (n === 0) return "O número zero é neutro."
        if (negative) {
            return `O número ${n} é negativo.`;
        } else if (!negative && moreThan50) {
            return `O número ${n} é maior que 50 e positivo.`;
        } 

        return `O número ${n} é positivo.`
    }
}

console.log(positiveNumber(51))