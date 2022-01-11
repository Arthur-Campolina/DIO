alert('tudo bem com você?')

var jogador1 = 0;
var jogador2 = 1;
var placar;

//  if ternário
jogador1 > 0 ? console.log('Jogador 1 marcou ponto!') : console.log('ninguém marcou ponto ou o joador 2 marcou ponto!')

// if - else if - else
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto!')
}

// switch/case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;

    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou')
}

// Laços de repetição 

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { 
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

//  for - executa uma instrução até que ela seja falsa.

for (let i = 0; i < array.length; i++){
    console.log(i);
}

//  for/in - funciona como uma repetição a partir de uma propriedade.
// com array
for (let i in array){
    console.log(i);
}

// com object
for (i in object){
    console.log(i);
}

//  for/of - funciona como uma repetição a partir de um valor.
// com array - obs: não da pra usar com objetos pq é impressa cada propriedade em uma linha
for (i of array){
    console.log(i);
}

// while
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

// do/while - condição checada depois que função já rodou
do {
    a++;
    console.log(a);
} while (a < 10) 
