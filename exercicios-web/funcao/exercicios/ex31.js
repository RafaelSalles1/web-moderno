// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console

let a = 1;
let b = 1;
let n = 0;
let mult = 1;
let array = []
let contadorNegativos = 0;

const verificaNegativos = (array) => {
    array.forEach((valor) =>{
        if (valor < 0){
            contadorNegativos++;
        }
    })
    console.log(contadorNegativos);
}


while (n < 5000){
    a = Math.floor(Math.random()*10);
    b = Math.ceil(Math.random()*10);
    if (b >= 5){
        mult = -1;
    } else {
        mult = 1;
    }
    array.push(a*mult);
    n++;
}

console.log(array);
verificaNegativos(array);