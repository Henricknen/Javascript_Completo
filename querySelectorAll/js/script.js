const query_skills = document.querySelector("div")        // 'document.querySelector' pega o elemento div que for encotrado 
console.log(query_skills)

const query_skillss = document.querySelectorAll("div")       // 'querySelectorAll' retorna uma coleção com todas as 'divs'
console.log(query_skillss)

const query_back = document.querySelectorAll(".back")     // pegando todos elementos que usam a 'classe back'
console.log(query_back)

const query_banco = document.querySelectorAll(".banco")
console.log(query_banco)

const query_codificando = document.querySelectorAll("#front")[0]        // pegando o primeiro '[0]' elemento de id 'front'
console.log(query_codificando)

const query_mais_de_um_elemento = document.querySelectorAll("h1, p")        // pegando mais de um elemento de tags diferentes
console.log(query_mais_de_um_elemento)

const query_elemento_dentro_de_outro = document.querySelectorAll("div > p")     // pega todos elementos 'p' que estiver dentro de um elemento 'div'
console.log(query_elemento_dentro_de_outro)