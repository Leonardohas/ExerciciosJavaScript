/*
    Dado um horário no formato AM/PM de 12 horas, converta-o para o formato militar (24 horas).
    Observação: - 12:00:00 AM em um relógio de 12 horas é 00:00:00 em um relógio de 24 horas.

    Exemplo:

    s = 12:01:00PM
    Retorna 12:01:00

    s = 12:01:00
    Retorna 00:01:00
*/

function timeConvertion(s){
    var amAndPMHours = s.charAt(8); // Pega um caracter em uma certa posição da string
    var militaryHours = "";
    if (amAndPMHours == "A") {
        if (s.substring(0,2) == "12") { // substring pega caracteres consecutivos nesse caso 0,2 irá retornar os caracteres do index 0 até index 1
            militaryHours = "00";
        } else {
            militaryHours = s.substring(0,2);
        }
    } else {
        if (s.substring(0,2) == "12"){
            militaryHours = s.substring(0,2);
        } else {
            militaryHours = parseInt(s.substring(0,2), 10) + 12; //parseInt converte string em numeros
        }
    } 
    return militaryHours + s.substring(2,8)
}

console.log(timeConvertion("07:05:45PM"))