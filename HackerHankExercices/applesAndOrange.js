/*
    A região vermelha signica a casa, onde (s) é o ponto de inicio e (t) o ponto final, a arvore de maça é a esquerda da casa e a de laranja é a direita
    Assumindo que as arvores estão localizadas em um ponto unico, onde a arvore de maças é o ponto (a) e a de laranja o ponto (b)
    Quando uma frutta cai de sua arvore, ela pousa em d unidades de distancia de sua arvore de origem ao longo do eixo x
    Um valor negativo de d significa que a fruta caiu in d unidades da arvore a esquerda e e um valor positivo de d significa que caiu d unidades da arvore a direita
    Dado o valor de d par m amaças e n oranges, determine quantas maças e laranjas irá cair na casa de sam.
*/

function applesAndOrange(s, t, a, b, apples, oranges){
    var applesCount = 0;
    var orangesCount = 0;

    // usando o for normalmente para percorrer apples e oranges 
    for (let index = 0; index < apples.length; index++) { 
        if ((apples[index] + a) >= s && (apples[index] + a) <= t) {
            applesCount += 1
        }       
    }
    for (let index = 0; index < oranges.length; index++) {
        if ((oranges[index] + b) <= t && (oranges[index] + b) >= s) {
            orangesCount += 1
        }       
    }
    console.log(applesCount);
    console.log(orangesCount);
    
    // Usando forEach para obter o mesmo resultado
    apples.forEach(apple => {
        if ((apple + a) >= s && (apple + a) <= t ) {
            applesCount += 1
        }
    });

    oranges.forEach((orange) => {
        if ((orange + b) <= t && (orange + b) >= s ) {
            orangesCount += 1
        }
    });

    console.log(applesCount);
    console.log(orangesCount);
};