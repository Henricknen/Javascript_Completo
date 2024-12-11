const caixa1 = document.querySelector("#caixa1");
const array_skill = ["Javascript", "PHP", "Laravel", "ReactJs", "VueJs", "HTML", "CSS"];

array_skill.map((el, chave)=> {
    const novo_elemento = document.createElement("div");    
    novo_elemento.setAttribute("id", "skill" + chave);
    novo_elemento.setAttribute("class", "hardskill");    
    novo_elemento.innerHTML = el;

    novo_elemento.addEventListener("click", (evt)=> {        // utilizando um escutador 'addEventListener' para o evento de click, chamar uma função anônima
        caixa1.removeChild(evt.target);     // método 'removeChild' remove o filho de caixa1
    });
    caixa1.appendChild(novo_elemento);
});
