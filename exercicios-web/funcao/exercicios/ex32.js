// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console

let a = 1;
let b = 1;
let n = 0;
let mult = 1;
let array = []
let somaValores = 0;
let quantidadeDeNumeros = 0;

const mediaAritmetica = (array) => {
    array.forEach((valor) =>{
        somaValores += valor;
        quantidadeDeNumeros++
    })
    console.log((Math.round(somaValores/quantidadeDeNumeros)*100)/100);
}


while (n < 20){
    a = Math.floor(Math.random()*10);
    b = Math.ceil(Math.random()*10);
    /*if (b >= 5){
        mult = -1;
    } else {
        mult = 1;
    }*/
    array.push(a*b);
    n++;
}

console.log(array);
mediaAritmetica(array);