const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn_transferir = document.querySelector("#btn_transferir");

const hardSkills = [...document.querySelectorAll(".hardskill")];

hardSkills.map((el) => {
    el.addEventListener("click", (evt) => {
        const hardskill = evt.target;
        hardskill.classList.toggle("selecionado");
    });
});

btn_transferir.addEventListener("click", () => {
    const skillSelecionadas = [...document.querySelectorAll(".selecionado")];       // lista de skills selecionadas
    skillSelecionadas.map((el) => {
        caixa2.appendChild(el);
    });
    
    const skillNaoSelecionadas = [...document.querySelectorAll(".hardskill:not(.selecionado)")];      // chave 'not' lista as skills que não possuem a classe 'selecionado'
    skillNaoSelecionadas.map((el) => {     // 'movendo' as skills não selecionadas para a caixa1
        caixa1.appendChild(el);
    });
});