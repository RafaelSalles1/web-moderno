/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console */

let vetorInteiro = [1,2,3,4];
let vetorString = ['um', 'dois', 'tres', 'quatro'];
let vetorDouble = [1.0, 2.0, 3.0, 4.0];


let vetorResultado1 = vetorInteiro.concat(vetorString);
let vetorResultado2 = [].concat(vetorDouble, vetorInteiro);

console.log( vetorResultado1);