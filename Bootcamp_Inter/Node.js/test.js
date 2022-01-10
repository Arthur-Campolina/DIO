const PRECO = 200; //nome de consts utilizam letra maiuscula - boas práticas
var desconto = 0.2;
var total = PRECO - (PRECO * desconto);

console.log(total)

// -------------------------------------------------------------------------------------------------------- //

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 7));

// -------------------------------------------------------------------------------------------------------- //

function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.lenght; i++) {
        if (array[i] %2 === 0) {
            evenNums.push(array[i]);
        }
    }
    console.log(evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);

// -------------------------------------------------------------------------------------------------------- //