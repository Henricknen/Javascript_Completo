let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let [a, b, c, ...d] = numeros;     // utilizando operador 'spread' que colocará os valores que não está sendo destruturados em 'nunhuma' variável na variável 'd'

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// -----------------------------

let obj = {nome:"Luis Henrique Silva Ferreira", profissional: "FullStack"}      // 'objeto' obj
let {nome, profissional} = obj;     // declarando variáveis e fazendo a 'destruturacão' do objeto obj
console.log(nome);
console.log(profissional);

// -----------------------------

const cores =()=> {
    return["verde", "amarelo", "azul", "branco"];
}

let[c1, c2,, c3] = cores();     // nessa destruturação pela posição a cor azul será inserida em 'vazio'
console.log(c1);
console.log(c2);
console.log(c3);

// -----------------------------

let codificando = "Codificando linguagem de programação JavaScript";
let[...x] = codificando.split(" ");     // destruturando o retorno do 'split' na variável 'x' e utilizando spread para imprimir todas strings
console.log(x);