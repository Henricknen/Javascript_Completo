let nome = new String("Luis Henrique S. F.");       // variável nome é um objeto, uma instançia da classe string
let profissional = new String("FullStack");

console.log(nome);
console.log(typeof(nome));      // imprimindo o 'tipo' da variável nome

console.log(nome.charAt(0));        // método 'charAt' retorna o caractere da posição indicada como parâmetro
console.log(nome.charAt(1));

console.log(nome.charCodeAt(1));        // método retorna o 'código' do caractere da posição passada como parâmetro
console.log(nome.concat(profissional));     // método faz a 'concatenação' das strings nome e profissional

console.log(profissional.indexOf("S"));       // método 'indexOf' procura a posição do primeiro caractere da string passada como parâmetro
console.log(nome.lastIndexOf("i"));     // método 'lastIndexOf' retorna a posição do último caracter encontrado