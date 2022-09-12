/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar*/

const trocaDeElementosArray = (array1, array2) => {
    if (array1.length != array2.length){
        console.log('Não são vetores de mesmo tamanho');
    } else {
        let tamanho = array1.length;
        for (n=0; n < tamanho; n++){
            array1.push(array2[n]);
            array2.push(array1[n]);
        }
        for (x=0; x < tamanho; x++){
            array1.shift();
            array2.shift();
        }
    }
    console.log(array1);
    console.log(array2);
}

trocaDeElementosArray([1,2,3], [4,5,6]);