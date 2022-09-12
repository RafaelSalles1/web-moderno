/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

const calculoAlturaCriancas = (alturaCrianca1, alturaCrianca2, taxaCrescimento1 = 0, taxaCrescimento2 = 0) => {
    let tempo = 1;
    let maiorCrianca = menorCrianca = taxaMaior = taxaMenor = 0;
    if (alturaCrianca1 < alturaCrianca2 || alturaCrianca2 < alturaCrianca1){
        if (alturaCrianca1 > alturaCrianca2) {
            maiorCrianca = alturaCrianca1;
            taxaMaior = taxaCrescimento1;
            menorCrianca = alturaCrianca2;
            taxaMenor = taxaCrescimento2;
        } else {
            maiorCrianca = alturaCrianca2;
            taxaMaior = taxaCrescimento2;
            menorCrianca = alturaCrianca1;
            taxaMenor = taxaCrescimento1;
        }
        if (taxaMaior >= taxaMenor) {
            console.log('A criança menor jamais será mais alta');
        }
        if (taxaMenor > taxaMaior) {
            let deltaAltura = maiorCrianca - menorCrianca;
            let deltaTaxa = taxaMenor - taxaMaior;
            tempo = deltaAltura / deltaTaxa;
            console.log(`A criança menor levará ${tempo} anos para alcançar a altura da maior.`)
        }
    } else {
        console.log('Ambas crianças possuem o mesmo tamanho.')
    }
}

calculoAlturaCriancas(140, 153, 3, 1);