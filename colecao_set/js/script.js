const caixa = document.querySelector("#caixa");      // apontamento para o elemento 'caixa'

let hardskills = new Set(["Javascript", "PHP", "Python"]);     // iniçializando coleção 'Set' com elementos dentro

hardskills.add("Laravel");      // adiçionando novo elemento na coleção
hardskills.add("ReactJs");
hardskills.add("VueJs");
hardskills.add("PHP");
hardskills.add("PHP");       // 'Set' não permite entradas duplicadas
hardskills.add("Javascript");

hardskills.delete("ReactJs");     // deletendo elemento 'ReactJs'
// hardskills.clear()     // limpando toda coleção 'hardskills'

console.log(hardskills);

// hardskills.forEach((el)=> {     // ultilizando método implementado na coleção 'Set', 'forEach' para percorre toda coleção
//     caixa.innerHTML += el + "<br/>"     // 'innerHTML += el' fazendo print dos elementos 'hardskills' na tela
// });

for(let m of hardskills) {     // inserindo elementos d coleção 'hardskills' n a variáve 'm'
    caixa.innerHTML += m + "<br/>"
}