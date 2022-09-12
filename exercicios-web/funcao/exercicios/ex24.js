/* 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while. */

const helloWorld11Times = () => {
    let count = 0;
    while (count < 11){
        console.log('hello world!');
        count += 1;
    }
    console.log(count);
}


helloWorld11Times();
