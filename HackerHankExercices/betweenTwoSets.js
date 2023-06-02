/* 
    Havera dois arrays de inteiros. Determine todos os inteiros que satisfaz as seguintes condições.
    1. Os elementos do primeiro array são todos fatores do inteiro sendo considerado
    2. O inteiro sendo considerado é um fator de todos os elementos da segunda matriz
    Esses numeros são referenciados por estar entre os dois arrays. Determine quantos desses números existem.
    Exemplo:
    a = [2,6]
    b = [24,36]
    Há dois numeros entre os arrays: 6 e 12
    6 % 2 = 0,6 % 6 = 0,24 % 6 = 0 e 36 % 6 = 0 para o primeiro valor 
    12 % 2 = 0,12 % 6 = 0 e 24 % 12 = 0,36 % 12 = 0 para o segundo valor, retorna 2  
*/

function getTotalX(a,b){
    let count = 0;
    let start = Math.min(...a, ...b);
    let end = Math.max(...a, ...b);

    for(let i = start; i <= end; i++){
           if(a.every(number => i % number === 0)
                && b.every(number => number % i === 0)){
                count++;
            }
    }
    
    return count;
};

console.log(getTotalX([2,6], [24,36]))