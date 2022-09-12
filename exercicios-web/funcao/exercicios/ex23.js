/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const situacaoAluno = (codigo, n1, n2, n3) => {
    while (codigo > 0){
        let maiorNota = notaMenor1 = notaMenor2 = media = 0;
        if (n1 > n2 && n1 > n3){
            maiorNota = n1;
            notaMenor1 = n2;
            notaMenor2 = n3;
        }
        if (n2 > n1 && n2 > n3){
            maiorNota = n2;
            notaMenor1 = n1;
            notaMenor2 = n3;
        }
        if (n3 > n2 && n3 > n1){
            maiorNota = n3;
            notaMenor1 = n2;
            notaMenor2 = n1;
        }
        media = maiorNota/4 + notaMenor1/3 + notaMenor2/3;
        if (media >=5){
            console.log('APROVADO');
            codigo = -1;
            break;
        } else {
            console.log('REPROVADO');
            codigo -= 1;
        }   
    }
}
situacaoAluno(10, 8, 5, 4);