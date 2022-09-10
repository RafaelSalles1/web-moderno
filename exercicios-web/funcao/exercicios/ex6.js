/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => capitalInicial + (capitalInicial * taxaJuros * tempoAplicacao)

const jurosCompostos = (capitalInicial, taxaJuros, tempoAplicacao) => (capitalInicial * ((1 + taxaJuros) * tempoAplicacao))


console.log(jurosSimples(600,0.12,5));
console.log(jurosCompostos(620,0.015,24));


