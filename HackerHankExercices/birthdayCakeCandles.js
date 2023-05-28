/*
    Você é responsável pelo bolo de aniversário de uma criança.
    Você decidiu que o bolo terá uma vela para cada ano de idade total da criança.
    A criança só conseguirá apagar a vela mais alta. Conte quantas velas são as mais altas.

    Exemplo:

    velas = [4,4,1,3]
    As velas de altura máxima têm 4 unidades de altura. Existem 2 delas, portanto, retorne 2.
*/

function birthdayCakeCandles(candles) {
    var tallestCandle = 0
    var count = 0 

    candles.sort((a, b) => b - a )
    tallestCandle = candles[0] 
    candles.forEach(candle => {
        if (candle == tallestCandle) {
            count += 1
        }
    });
    return count
}