/* 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A */

let n = 0;
let array = []
let novaArray = []

while (n < 5){
    let a = Math.round(Math.random()*100)/10;
    array.push(a);
    n++;
}

const conceitoNotas = (array) => {
    array.forEach((valor, indice) => {
        if (valor <= 4.9 && valor >= 0){
            novaArray.push(`A nota ${valor} tem conceito D`)
        } 
        if (valor <= 6.9 && valor > 4.9){
            novaArray.push(`A nota ${valor} tem conceito C`)
        } 
        if (valor <= 8.9 && valor > 6.9){
            novaArray.push(`A nota ${valor} tem conceito B`)
        } 
        if (valor > 8.9) {
            novaArray.push(`A nota ${valor} tem conceito A`)
        }
    })
    console.log(novaArray);
}

conceitoNotas(array);