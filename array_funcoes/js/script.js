const caixa = document.querySelector("#caixa");     // pegando o elemento de 'id' caixa

let formacoes = ["Pós Desenvolvimento Web", "Superior Análise e Desenvolvimento de Sistemas, Técnico Informática para internet"];
let hardskills = ["HTML", "CSS", "Javascript", "PHP", formacoes];       // array de repositórios com três elementos

console.log(hardskills[0]);       // trabalhando com elemento espeçifico, indicando seu indiçe 'posição'

hardskills.push("Técnico Eletroeletrônica"); // 'push' adiçiona elementos no final do array
hardskills.push("Laravel");
hardskills.pop();     // remove o último elemento do array
hardskills.unshift("ReactJs");        // método 'unshift' permite a adição de elemento no iniçio do array
hardskills.shift();       // 'shift' remove do iniçio

hardskills.map((el) => { // Utilizando 'map' para 'percorrer' e 'iterar' sobre o array 'hardskills'
    let p = document.createElement("p");        // criando um elemento 'p'
    p.innerHTML = el;
    caixa.appendChild(p);
});