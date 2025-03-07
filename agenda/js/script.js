const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");

btn_home.addEventListener("click", (evt)=> {
    abrir_pagina(evt.target, "./home.html");
});

btn_novo.addEventListener("click", (evt)=> {
    abrir_pagina(evt.target, "./novo.html");
});

btn_pesquisar.addEventListener("click", (evt)=> {
    abrir_pagina(evt.target, "./pesquisar.html");    
});

btn_gestao.addEventListener("click", (evt)=> {
    abrir_pagina(evt.target, "./gestao.html");    
});

btn_sobre.addEventListener("click", (evt)=> {
    abrir_pagina(evt.target, "./sobre.html");
});

const abrir_pagina =(el, url)=> {      // fução 'abrir_pagina' reçebe como parâmetro um elemento que será seleçionado
    const abas = [...document.querySelectorAll(".aba")];     // pegando todos elementos que contém a 'classe aba'
    abas.forEach(e=> {      // percorrendo elemento por elemento do array 'abas' e adiçionando em 'e'
        e.classList.remove("aba_selecionada");      // removendo todas abas seleçionadas
    });
    el.classList.add("aba_selecionada");        // adiçionando em 'el' a aba seleçionada       // adiçionando aba seleçionada
    window.open(url, "if_principal");       // gerenciando a abertura pela aba seleçionada
}