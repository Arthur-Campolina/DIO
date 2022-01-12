// Tipos de funçaõ
// Delcarativa - tem que ter um nome obrigatoriamente

function funcao () {
    console.log('Tudo certo, bro!?')
}

funcao();

// FUnção com parametro

function mensagem (parametro1, parametro2) {
    console.log(parametro1,parametro2)
}

mensagem('Tudo certo,','bro!?');

// expressões de funções - não precisa de nome

var funcao = function (){
    console.log('sou uma mensagem de função de expressão')
}

funcao();

// Arrow funtion

var funcaoArrow = () => {
    console.log("Sow uma arrow function!")
}

funcaoArrow();