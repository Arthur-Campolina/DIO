// Função anônima

const SOMA = function (a,b) {
    console.log(a+b);
}
SOMA(1,2);

//  Função autoinvocavel - Pode tamber ser salva em uma variável
(
    function () {
        let name = "Arthur Campolina de Moura";
        return name;
    }
)();

// callback - uma função passada como argumento para outra função.

const CALC = function(op, n1, n2) {
    return op(n1,n2);
}

const SUM = function(n1,n2) {
    return n1 + n2;
}

const SUB = function(n1,n2) {
    return n1 - n2;
}

const RESULT_SUM = CALC(SUM, 3, 3);
const RESULT_SUB = CALC(SUB, 5, 3);

console.log(`O resultado da soma é ${RESULT_SUM} e o resultado da subtração é ${RESULT_SUB}.`);