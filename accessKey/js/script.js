const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");

q1.accessKey = "b";     // propriedade 'accessKey' permite definir uma tecla de atalho para um 'componente' HTML
q2.accessKey = "n";         // 'n' caracter escolhido para atalho

console.log(q1.accessKey);      // verificando no console as teclas de atalho
console.log(q2.accessKey);

const info =(el)=> {
    let DOMRect_q = el.getBoundingClientRect();
    posx.innerHTML = `posx:${DOMRect_q.x}`;
    posy.innerHTML = `posy:${DOMRect_q.y}`;
    largura.innerHTML = `largura:${DOMRect_q.width}`;
    altura.innerHTML = `altura:${DOMRect_q.height}`;
}

q1.addEventListener("click", (evt)=> {
    info(evt.target);
});

q2.addEventListener("click", (evt)=> {
    info(evt.target);
});