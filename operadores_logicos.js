let n1, n2, n3, n4;     // utilizando 'let' para criar variáveis
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2) && (n1 > n3));     // ultilizando o oerador '&&' e retorno será 'false'

console.log((n1 > n2) || (n1 > n3));         // operador lógico 'or'  retornara 'true'

console.log(!((n1 > n2) || (n1 > n3)));  // o operador '!' not nega o retorno dessa condição que passara a valer 'false'

if((n1 > n2) && (n3 > n4)) {
    console.log("Verdadeiro");    // se a operação for 'true' é exibida esta menssagem
} else {
    console.log("Falso");    // se for 'false' esta que sera exibida 
}

/*          Tabela verdade
           And          Or
        V | V | V     V | V | V
        V | F | F     V | F | V
        F | V | F     F | V | V
        F | F | F     F | F | F

*/