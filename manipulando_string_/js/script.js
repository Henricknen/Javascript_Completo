let tecnologia = new String("Front End");
let tecnologia2 = new String("back End");
let profissional = new String("FullStack");
let formacao = new String("Pós Desenvolvimento_Web");

console.log(tecnologia);
console.log(typeof(tecnologia));

console.log(tecnologia.charAt(0));
console.log(tecnologia.charAt(1));

console.log(tecnologia.charCodeAt(1));
console.log(tecnologia.concat(profissional));

console.log(profissional.indexOf("S"));
console.log(tecnologia.lastIndexOf("i"));

console.log(tecnologia.localeCompare(tecnologia2));        // método 'localeCompare' é utilizado para fazer comparação

console.log(tecnologia2.replace("b", "B"));      // substitui determinado caracter por outro

console.log(tecnologia.search("Front"));        // método 'search' encontra a primeira ocorrencia da string pesquisada

console.log(profissional.slice(4, 9));      // 'slice' retorna parte da string, iniçia da posição 4 e termina na posição 8

let nome_formacao = formacao.split(" ");     // método 'split' realiza um recorte apartir do ponto que for indicado, nesse caso o ponto é o espaço " ", e retorna um array com todas as posicões de ondo ocorreu o recorte
console.log(nome_formacao);