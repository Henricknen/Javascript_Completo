let nome = new String("Luis Henrique Silva Ferreira");      // variável nome com nome do autor
console.log(nome);

console.log(nome.search(/Henrique/i));       // 'search' faz a pesquiza dentro da string e retorna a posição que inicia o elemento passado como parâmetro, e utilizando  expressão regular '/regex/', como modificador 'i' que faz a busca sem utilizar o 'case-sensitive'
console.log(nome.match(/u/g));       // 'match' retorna todas as ocorrências do caractere 'u' encontradas na string, o modificador 'g' torna a busca global, ou seja, ele retorna todas as ocorrências e não apenas a primeira
console.log(nome.replace(/Luis Henrique Silva Ferreira/i, "LUIS HENRIQUE SILVA FERREIRA"));     // 'replace' substitui a string 'Luis Henrique Silva Ferreira' por 'LUIS HENRIQUE SILVA FERREIRA', o modificador 'i' permite a substituição ignorando a diferença entre maiúsculas e minúsculas