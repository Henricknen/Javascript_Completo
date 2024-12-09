const caixa1 = document.querySelector("#caixa1");
const btn = document.querySelector("#formac1");

console.log(caixa1.firstElementChild);       // 'firstElmentchild' retorna o primeiro elemento da coleção
console.log(caixa1.lastElementChild);   // 'lastElementChild' retorna o último elemento
console.log(caixa1.children);        // 'children' retorna apenas elementos html

console.log(document.getRootNode());        // pega o nó raiz