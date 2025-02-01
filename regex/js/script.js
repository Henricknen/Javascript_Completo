let nome = new String("Luisssss Henrique Silva Ferrrrrreira 1991");
let email = "l.henrick@live.com";
let num_aleatorio = "345, 01, 00021400000009898";
console.log(nome);

console.log(nome.search(/Henrique/i));
console.log(nome.match(/u/g));
console.log(nome.replace(/Luis Henrique Silva Ferreira/i, "LUIS HENRIQUE SILVA FERREIRA"));

console.log(nome.match(/[a-g|h-z|0-9]/ig));      // utilizando '[] padroes' para localizar caracteres de 'a' a 'z' e numeros de '0' a '9'

console.log(nome.match(/\d/ig));     // 'métacaracter' d que especifica que 'digitos' que está sendo buscado na expressão regular, retornando somente números
console.log(nome.match(/\s/ig));        // métacaracter 's' busca por 'espaços'
console.log(nome.match(/\bH/ig));            // métacarater 'b' busca por caracteres ' DWORD'

console.log(num_aleatorio);
console.log(nome.match(/s+|r+/ig));      // '+' é um 'quantificador' que une todos os 's' e todos os 'r' consecutivos retornando como uma única palavra
console.log(nome.match(/ri*/ig));       // quantificador '*' retorna  'ri' ou 'r'
console.log(num_aleatorio.match(/0/ig));        // retorna a quantidade de todos 0
console.log(num_aleatorio.match(/0+/ig));
