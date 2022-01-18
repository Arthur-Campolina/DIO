// Objeto arguments - coleção de argumentos, similar a um array - objeto iterável
function findMax () {
    let max = -Infinity;
    for(let i =0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(1, 2, 0, 6, 90, 1));

// Arrays - Spread - reticencias 

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1,2,3];
console.log(sum(...numbers));

// Arrays - rest - combina os elemnetos em um array

function confereTamanho(...args) {
   console.log(args.length);
}

confereTamanho(1, 2, 3);

// Object Destructuring - entre chaves podemos filtrar apenas os dados que nos interessam dentro de um obj.
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'Jhon',
        lastName: 'Doe'
    }
};

function userID({id}) {
    return id;
}

console.log(userID(user));