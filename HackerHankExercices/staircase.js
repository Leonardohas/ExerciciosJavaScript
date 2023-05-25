/*
    Detalhes da escada
    Esta é uma escada de tamanho n = 4

       #
      ##
     ###
    ####

    Sua base e altura são iguais a n. Ela é desenhada usando símbolos de # e espaços. A última linha não é precedida por nenhum espaço.
    Escreva um programa que imprime uma escada de tamanho n. 
*/

function staircase(n) {
    const array = new Array(n).fill(' ');
    while (array.indexOf(' ') != -1){
        array.shift();
        array.push('#')
        console.log(array.join(''));
        n--;
    }
    return array
}