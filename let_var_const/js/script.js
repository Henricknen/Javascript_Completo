"use strict"        // torna a declaração da variável antes de usa-la necessária

if(true) {
    var linguagem_deprogramacao = "JavaScript";     // a utilização da declaração 'var' que permite a utilização da variável fora deste escopo em que foi criada
}

console.log(linguagem_deprogramacao)    // esse 'console' terá acesso a variável 'linguagem_deprogramacao'

// --------------------------------------------------------------------------------------------------------------------------------

if(true) {
    var linguagem_deprogramacaoo = "PHP";       // 'let' só permite a utilização da variável dentro do escopo onde foi criada
}

console.log(linguagem_deprogramacaoo)       // esse 'console' exibirá erro, porque não conseguirá acessar a variável 'linguagem_deprogramacaoo' pois ela não está sendo definida neste escopo em que está sendo chamada

let ano = "dois mil e vinte quatro";
ano = 2024;     // 'alterando' o tipo de valor da variável
console.log(ano)

// --------------------------------------------------------------------------------------------------------------------------------

const desenvolvedor = "FullStack";      // constante não permite a alteração do seu valor
desenvolvedor = "Front End";    // essas alterações não será permitidas
desenvolvedor = "Back End";

console.log("Profissional: " + desenvolvedor)