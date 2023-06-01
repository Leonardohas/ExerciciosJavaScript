/*

Você é um coreografista de um show de circo com varios animais. Para um ato, lhe foi dado 2 cagurus em uma linha numerica pronta para pular em uma direção positiva.
• O primeiro canguru começa na localização x1 e se move a uma taxa v1 metros por salto.
• O segundo canguru começa na localização x2 e se move a uma taxa v2 metros por salto.

Você tem que descobrir um jeito de pegar os dois cangurus na mesma localização no mesmo tempo como parte do show. se for possivel retorne YES, caso contrario retorne NO.

Exemplo:
x1 = 2
v1 = 1
x2 = 1
v2 = 2 

Depois de um pulo, eles estão ambos em x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), então a resposta é YES

*/

function kangaroo(x1, v1, x2, v2){
    var kang1 = x1;
    var kang2 = x2;
    var yesOrNo = "";
    for (let index = 0; index < 10000; index++) {
        kang1 += v1;
        kang2 += v2;
        if (kang1 == kang2) {
            yesOrNo = "YES"
        } else {
            yesOrNo = "NO"
        }
    }
    return yesOrNo
};
// Esse abaixo funcionou!!!!
function kangaroo(x1, v1, x2, v2){
    var kang1 = x1;
    var kang2 = x2;
    var yesOrNo = "NO";
    for (let index = 0; index < 10000; index++) {
        kang1 += v1;
        kang2 += v2;
        if (kang1 == kang2) {
            yesOrNo = "YES"
        }
    }
    return yesOrNo
};

console.log(kangaroo(0, 3, 4, 2))