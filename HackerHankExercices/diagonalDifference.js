/*
Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais. 
Por exemplo, a matriz quadrada "arr" é mostrada abaixo:

123
456
989

A diagonal da esquerda para a direita = 1 + 5 + 9 = 15. A diagonal da direita para a esquerda = 3 + 5 + 9 = 17. 
A diferença absoluta entre elas é 15 - 17 = 2.
*/

function diagonalDifference(arr) {
    const length = arr.length;
    let diagonal1 = 0, diagonal2 = 0;
    for(let i = 0; i < length; i++){
         diagonal1 += arr[i][i];
         diagonal2 += arr[length -1 - i][i]
    }
    return Math.abs(diagonal1 - diagonal2);  
}