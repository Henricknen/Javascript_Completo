const mat = document.getElementById("mat");
const matt = document.getElementById("matt");
const mattt = document.getElementById("mattt");

const num = Math.random() * 10;     // função 'random' gera um número aleatório entre 0 e 10, atribuindo à constante 'num'
mat.innerHTML = Math.floor(num);     // função 'floor' arredonda o número para baixo, atribuindo um número inteiro de 0 a 9 a 'mat'

const numm = Math.random() * 10;
matt.innerHTML = Math.round(numm);        // função 'round' arredonda o número para o inteiro mais próximo, atribuindo o valor arredondado a 'matt'

const nummm = Math.floor(Math.random() * 10) + 1;       // função 'floor' arredonda para baixo, com a multiplicação por 10, e a adição de 1 faz o número ficar entre 1 e 10
mattt.innerHTML = nummm;
