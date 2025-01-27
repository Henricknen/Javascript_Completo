let tecnologia = new String("Front End");
let tecnologia2 = new String("back End");
let profissional = new String("FullStack");
let Pos = new String("Pós Desenvolvimento_Web");
let Superior = new String("Análise e Desenvolvimento de Sistemas");

console.log(tecnologia);
console.log(typeof(tecnologia));

console.log(tecnologia.charAt(0));
console.log(tecnologia.charAt(1));

console.log(tecnologia.charCodeAt(1));
console.log(tecnologia.concat(profissional));

console.log(profissional.indexOf("S"));
console.log(tecnologia.lastIndexOf("i"));

console.log(tecnologia.localeCompare(tecnologia2));

console.log(tecnologia2.replace("b", "B"));

console.log(tecnologia.search("Front"));

console.log(profissional.slice(4, 9));

let nome_formacao = formacao.split(" ");
console.log(nome_formacao);

let superior = Superior.substring(0, 32);       // método 'substring' retorna parte da string
console.log(superior);

console.log(Pos.toUpperCase());      // 'toUpperCase' converte de minúscolo para maiúculo

console.log(tecnologia.toLowerCase());      // 'toLowerCase' converte para minúsculo

console.log(tecnologia2.valueOf());     // 'valueOf' retorna o valor real da string