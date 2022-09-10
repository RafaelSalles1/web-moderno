// 12) Faça um algoritmo que calcule o fatorial de um número

let numero = 4;
let mult = [];
let resultado = 1;

while (numero > 0){
    mult.push(numero);
    numero--;
}

console.log(mult);

for (i = 0; i < mult.length; i++){
    resultado *= mult[i];
}

console.log(resultado);