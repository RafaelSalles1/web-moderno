/* 9) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente */

const comanda = (codigo, qtd) => {
    switch(codigo){
        case 100:
            console.log(3*qtd);
            break;
        case 200:
            console.log(4*qtd);
            break;
        case 300:
            console.log(5.5*qtd);
            break;
        case 400:
            console.log(7.5*qtd);
            break;
        case 500:
            console.log(3.5*qtd);
            break;
        case 600:
            console.log(2.8*qtd);
            break;
        default:
            console.log('Produto inexistente');
            break;
    }
}

comanda(100, 3)