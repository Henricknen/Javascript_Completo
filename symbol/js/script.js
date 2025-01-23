const s1 = Symbol();        // constante 's1' associada ao retorno da função 'symbol'
const s2 = Symbol();
const s3 = Symbol.for("Luis Henrique Silva Ferreira");      // utilizando método 'for' que permite criar o identificador 'Luis Henrique Silva Ferreira' no registro global
const s4 = Symbol.for("FullStack");

console.log(s1);
console.log(s2);

console.log(s1 === s2);     // 'comparando' objetos s1 e s2

console.log(typeof(s1));        // retorna o 'tipo' do objeto s1

console.log(Symbol.keyFor(s3));     // retornando a chave 'registrador' do symbol s3
console.log(Symbol.keyFor(s4));