// 26) Fazer um programa para encontrar todos os pares entre 1 e 100

const paresNaPrimeiraCentena = () => {
    let n = 0;
    while (n <= 100){
        if (n%2 == 0){
            console.log(n);
        }
    n++;
    }
}

paresNaPrimeiraCentena();