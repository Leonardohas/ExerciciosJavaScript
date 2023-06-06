/*

Maria joga basquete no colegio, e quer ser pro. Cada temporada ela mantém um registro de seu jogo. Ela tabula o número de vezes que quebrou seu recorde da temporada para mais pontos e menos pontos em um jogo.
pontos marcados no primeiro jogo estabelece seu registro para a temporada, e ela começa a contagem de lá

Exemplo:

pontos = [12,24,10,24]
                                 Count
jogo  pontos  minimo  maximo    min  max
0       12      12      12       0    0     
1       24      12      24       0    1
2       10      10      24       1    1
3       24      10      24       1    1

Dado os registros das temporadas, determine o numero de vezes que maria quebra esse registro para maior e menor pontos marcados durante a temporada.

*/ 

function breakingRecords(scores) {
    var firstGameMaxpoints = scores[0]; // 10
    var firstGameMinPoints = scores[0]; // 10
    var countMaxGames = 0;
    var countMinGames = 0;
 
    for (let index = 0; index < scores.length; index++) {
         if (scores[index] > firstGameMaxpoints) {
             firstGameMaxpoints = scores[index]
             countMaxGames += 1
         }
         
         if (scores[index] < firstGameMinPoints) {
             firstGameMinPoints = scores[index]
             countMinGames += 1
         }
    }
 
    return [countMaxGames, countMinGames]
 
 };
 
 console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25,  1]))