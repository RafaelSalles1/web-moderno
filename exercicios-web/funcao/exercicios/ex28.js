// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

const paresEImparesNumaArray = (array) => {
    let countPares = 0;
    let countImpares = 0;
    array.forEach((n)=>{
        if (n%2==0){
            countPares++;
        } else {
            countImpares++;
        }
    })
    console.log(countPares, countImpares);
}

paresEImparesNumaArray([4,2,1,3,5]);
