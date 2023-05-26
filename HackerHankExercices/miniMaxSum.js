/* 
    Dado cinco números inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando exatamente quatro dos cinco números inteiros. 
    Em seguida, imprima os respectivos valores mínimo e máximo em uma única linha, separados por um espaço, como dois números inteiros longos.
    
    Exemplo:
    arr = [1,3,5,7,9]
    A soma minima é 1 + 3 +5 + 7 = 16 e a soma maxima é 3 + 5 + 7 + 9 = 24. A função printa 16 24.

*/


function miniMaxSum(arr) {
    var sum = 0
    var maxSum = 0
    var minSum = 0
    var minVal = arr[0]
    var maxVal = arr[0]
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > maxVal){
            maxVal = arr[i]
        }
        if(arr[i] < minVal){
            minVal = arr[i]
        }
        sum = sum + arr[i]     
    }
    maxSum = sum - minVal
    minSum = sum - maxVal
    console.log(`${minSum} ${maxSum}`)
}