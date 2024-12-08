const caixa1 = document.querySelector("#caixa1");       // pegando a caixa de origem
const caixa2 = document.querySelector("#caixa2");           // pegando a caixa de destino
const btn = document.querySelector("#btn_copiar");              // pegando o botão para copiar

const hardSkills = [...document.querySelectorAll(".hardskill")];        // selecionando todas as "hardskills" (tanto front quanto back)

hardSkills.map((el) => {        // utilizando 'map' para percorrrer todos elementos e adicionar o ouvinte de evento para cada "hardskill"
    el.addEventListener("click", (evt) => {
        const hardskill = evt.target; // Pegando o elemento clicado
        hardskill.classList.toggle("selecionado"); // Adiciona ou remove a classe 'selecionado'
    });
});

btn.addEventListener("click", () => {       // adicionando o ouvinte de evento para o botão
    const skillSelecionadas = [...document.querySelectorAll(".selecionado")];       // pega todos os elementos com a classe 'selecionado'
    skillSelecionadas.map((el) => {     // 'movendo' as skills selecionadas para a caixa2
        caixa2.appendChild(el);
    });
});