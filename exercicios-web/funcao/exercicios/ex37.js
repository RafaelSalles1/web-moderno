/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos. an = a1*q**(n-1)*/

function progressaoAritmetica (numeroDeTermos, primeiroTermo, razao) {
    let resultado = [primeiroTermo];
    let soma = primeiroTermo;
    for ( n = 1; n < numeroDeTermos; n++){
        let termoAtual = primeiroTermo + (n * razao);
        soma += termoAtual;
        resultado.push(termoAtual);
    }
    console.log(resultado);
    console.log(soma)
}

const progreesaoGeomtrica = (numeroDeTermos, primeiroTermo, razao) => {
    let resultado = [];
    let soma = 0;
    for ( n = 1; n <= numeroDeTermos; n++){
        let termoAtual = primeiroTermo*(razao**(n-1));
        soma += termoAtual;
        resultado.push(termoAtual);
    }
    console.log(resultado);
    console.log(soma);
}

progressaoAritmetica(5, 5, 2);
progreesaoGeomtrica(5,5,2);