function digitalRoot(n) {
    let soma = 0;
    let x = 2;
    n = n.toString().split('');
    while (x > 1){
        n = n.toString().split('');
        console.log(n)
        for (let i = 0; i < n.length; i++){
            soma += parseInt(n[i]);
            console.log(soma)
        }
        n = soma;
        x--;
    }
    return n;

  }

  console.log(digitalRoot(9576));