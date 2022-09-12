/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

const multiplicaArrayPeloElemento = (array, elemento) => {
    let novaArray = [];
    array.forEach((valor) => {
        novaArray.push(valor*elemento)
    })
    console.log(novaArray);
}

const multiplicaArrayPorElementoMaiorQue5 = (array, elemento) => {
    let novaArray = []
    if (elemento > 5){
        array.forEach((valor) => {
            novaArray.push(valor*elemento);
        })
        console.log(novaArray);
    } else {
        console.log(array);
    }
}

multiplicaArrayPeloElemento([1,2,3,4], 4)
multiplicaArrayPorElementoMaiorQue5([1,2,3,4], 4)
multiplicaArrayPorElementoMaiorQue5([1,2,3,4], 6)