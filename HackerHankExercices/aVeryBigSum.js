/*
    Neste desafio, você precisa calcular e imprimir a soma dos elementos em um array,
    levando em consideração que alguns desses inteiros podem ser bastante grandes.
*/

function aVeryBigSum(ar) {
    var sum = 0;
    var array = ar;
    for(var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}