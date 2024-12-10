const caixa1 = document.querySelector("#caixa1");
const btn = document.querySelector("#formac1");

if (caixa1) {
    console.log(caixa1.hasChildNodes());        // 'hasChildNodes' verifica se 'caixa1' possui filhos e retorna true
} else {
    console.log("Elemento #caixa1 não encontrado.");
}

if (btn) {
    console.log(btn.hasChildNodes());
    console.log(btn.childNodes);        // exibe os 'childNodes' do elemento 'btn'
} else {
    console.log("Elemento #formac1 não encontrado.");
}

console.log(btn.children.length > 0 ? "Possui filhos..." : "Não possui filhos...");         // verificação utilizando 'operador ternário'

console.log(caixa1.children[0].innerHTML = "Alterando o texto do primeiro elemento...");
