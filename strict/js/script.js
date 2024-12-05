"use strict"

let profissional = "Luis Henrique S. F."
ano_da_codificacao = 2024       // essa variável fará o código apresentar erro pois não está sendo declarada corretamente com 'let' ou 'var' e está utilizando o modo 'strict' que não permite isso

console.log(profissional);          // 'console.log' faz a impressão do valor da variável
console.log("Meu nome é: " + profissional);
console.log("Esta codificação foi realizada no ano de " + ano_da_codificacao);