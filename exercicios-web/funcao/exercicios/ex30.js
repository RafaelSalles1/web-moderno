// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

const maiorEMenorValoresDaArray = (array) => {
    let maiorValor = 0;
    let menorValor = 999999999999999999999999;
    array.forEach((valor) =>{
        if (valor > maiorValor){
            maiorValor = valor;
        }
        if (valor < menorValor){
            menorValor = valor;
        }
    })
    console.log(maiorValor, menorValor);
}

array = [1,10,20,800,471,299,491,2];
maiorEMenorValoresDaArray(array);