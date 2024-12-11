const caixa1 = document.querySelector("#caixa1");
const array_skill = ["Javascript", "PHP", "Laravel", "ReactJs", "VueJs", "HTML", "CSS"];

array_skill.map((el, chave)=> {
    const novo_elemento = document.createElement("div");    
    novo_elemento.setAttribute("id", "skill" + chave);
    novo_elemento.setAttribute("class", "hardskill");  
    
    const btn_lixeira = document.createElement("img");      // criando um novo elemento (imagem)
    btn_lixeira.setAttribute("src", "./lixeira.png");           // definindo o atributo 'src' que aponta para a imagem da lixeira
    btn_lixeira.setAttribute("class", "./btn_lixeira");
    novo_elemento.appendChild(btn_lixeira);     // anexando a imagem ao 'novo_elemento'

    novo_elemento.innerHTML = el;

    novo_elemento.addEventListener("click", (evt)=> {
        caixa1.removeChild(evt.target);
    });
    caixa1.appendChild(novo_elemento);
});
