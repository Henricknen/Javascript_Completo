let tecnologia = new String("Front End");
let tecnologia2 = new String("back End");
let profissional = new String("FullStack");
let Pos = new String("Desenvolvimento_Web");
let Superior = new String("Análise e Desenvolvimento de Sistemas");

console.log(Pos.startsWith("D"));       // método 'startsWith' verifica se a string iniçia com o que foi indicado no parâmetro, retorn 'true' ou 'false'

console.log(Superior.endsWith("Sistemas"));     // método 'endsWith' verifica com o que a string termina

console.log(profissional.includes("llS"));      // 'includes' verifica o que tem no 'meio' da string

console.log(tecnologia.repeat(3));      // 'repeat' repete a string

let num = 10;
num = num.toString();       // método 'toString' converte um number em uma string
console.log(typeof(num));