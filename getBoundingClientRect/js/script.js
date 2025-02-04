const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const posx = document.getElementById("posx");
const posy = document.getElementById("posy");
const largura = document.getElementById("largura");
const altura = document.getElementById("altura");


const info =(el)=> {        // função info contém todas propriedades do elemento
    let DOMRect_q = el.getBoundingClientRect();        // pegando o 'getBoundingClientRect' do elemento que vier como parâmetro
    posx.innerHTML = `posx:${DOMRect_q.x}`;
    posy.innerHTML = `posy:${DOMRect_q.y}`;
    largura.innerHTML = `largura:${DOMRect_q.width}`;
    altura.innerHTML = `altura:${DOMRect_q.height}`;
}

q1.addEventListener("click", (evt)=> {
    info(evt.target);       // chamando a função 'info' e passando o elemento que foi clicado como parâmetro
});

q2.addEventListener("click", (evt)=> {
    info(evt.target);
});