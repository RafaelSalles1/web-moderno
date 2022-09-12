/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

const contagemImparesNumIntervalo = (n1, n2) => {
    let maiorNumero = menorNumero = 0;
    if (n1 > n2) {
        maiorNumero = n1;
        menorNumero = n2;
    } else {
        maiorNumero = n2;
        menorNumero = n1;
    }
    for (let n = menorNumero; n <= maiorNumero; n++){
        if (n%2 != 0){
            console.log(n);
        }
    }
}

contagemImparesNumIntervalo(100,0)