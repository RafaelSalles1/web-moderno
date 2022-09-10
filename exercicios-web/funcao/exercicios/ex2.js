/* ) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. */

// | b - c | < a < b + c
// | a - c | < b < a + c
// | a - b | < c < a + b 

const verificaLado1 = (lado1, lado2, lado3) => {
    if (Math.abs(lado2-lado3) < lado1 & lado1 < (lado2+lado3)){
        return true;
    } else {
        return false;
    }
}

const verificaLado2 = (lado1, lado2, lado3) => {
    if (Math.abs(lado1-lado3) < lado2 & lado2 < (lado1+lado3)){
        return true;
    } else {
        return false;
    }
}

const verificaLado3 = (lado1, lado2, lado3) => {
    if (Math.abs(lado1-lado2) < lado3 & lado3 < (lado1+lado2)){
        return true;
    } else {
        return false;
    }
}

const podeSerTriangulo = (lado1, lado2, lado3) => {
    if (verificaLado1(lado1, lado2, lado3) & verificaLado2(lado1, lado2, lado3) & verificaLado3(lado1, lado2, lado3)){
        return true;
    } else {
        return false;
    }
}

const tipoTriangulo = (lado1, lado2, lado3) => {
    if (podeSerTriangulo(lado1, lado2, lado3) == false){
        return 'Não pode formar triangulo'
    } else {
        if (lado1 == lado2 & lado1 == lado3) {
            return 'equilatero';
        } 
        if (lado1 != lado2 & lado1 != lado3 & lado2 != lado1) {
            return 'escaleno';
        }
        else {
            return 'isosceles';
        }
    }
}

console.log(tipoTriangulo(2, 20, 4));
