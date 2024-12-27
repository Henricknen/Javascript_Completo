const caixa = document.querySelector("#caixa");      // apontamento para o elemento 'caixa'

const repositorio = "javascript";
const proprietario = "Luis Henrique Silva Ferreira";
const data = "26/12/2024";

// const frase = "Este codigo de " + repositorio + " foi produzido por " + proprietario + " na data de " + data        // concatenando as constantes criadas
const frase = `Este codigo de ${repositorio}<br/>\n produzindo por ${proprietario}<br/>\n na Data de ${data}`        // concatenando 'template_strings' de forma mais simples ultilizando delimitador `${ }`

console.log(frase);      // '\n' faz a quebra de linha no 'console'

caixa.innerHTML = frase     // '<br/>' faz a quebra de linha no 'DOM'
