/*
    cada estudante recebe uma nota de 1 até 100
    se a nota for menor do que 40 (Reprovado)
    se a diferença entre as notas e o proximo multiplo de 5 for menor que 3 então a nota será arredondada para cima, para o proximo multiplo de 5 
    Se o valor da nota for menor que 38 não há arredondamento já que o resultado será reprovação.
*/

function gradingStudents(grades){
    for (var i = 0; i < grades.length; i++){
        if(grades[i] >= 38){
            if (grades[i] % 5 == 3) {   // nesse caso estou pegando o numero dentro de grades[i] = 73 e e dividindo por 5 e se tiver resto siginifica que não é multiplo de 5. O % pega o resto da divisão.
                grades[i] += 2;
            } else if (grades[i] % 5 == 4){
                grades[i] += 1;
            }
        }
    }
    return grades
};

console.log(gradingStudents([73, 67, 38, 33]));