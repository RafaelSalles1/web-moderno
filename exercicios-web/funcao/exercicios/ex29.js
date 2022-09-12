/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações */

const dentroIntervaloDezEVinte = (array) => {
    let contadorDentroRange = contadorForaRange = 0;
    for (i=0; i < array.length; i++){
        if (array[i] >= 10 && array[i] <= 20){
            contadorDentroRange++;
        } else{
            contadorForaRange++;
        }
    }
    console.log(contadorDentroRange, contadorForaRange);
}

const array = [1,11,01,10,20,18,7,8];

dentroIntervaloDezEVinte(array);