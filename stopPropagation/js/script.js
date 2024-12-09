const caixa1 = document.querySelector("#caixa1");       // seleciona o elemento com id 'caixa1'
const btn = document.querySelector("#formac1");           // seleciona o elemento com id 'formac1'
const todas_formacoes = [...document.querySelectorAll(".minhas")];

caixa1.addEventListener("click", (evt) => {     // utilizando 'addEventListener' que ouve o evento de click e chama uma função anônima
    console.log("clicou");
    console.log(evt);         // exibe todos os detalhes do evento
});

todas_formacoes.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation();          // método 'stopPropagation' impede a propagação do evento para os elementos
    });
});

