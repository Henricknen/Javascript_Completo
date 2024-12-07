const msg =()=> {       // 'arrow function' msg
    alert(" linguagem de programação utilizada principalmente para criar interatividade em páginas web")
}

const skills = [...document.querySelectorAll("#skill")];  // seleciona todos os elementos com a id 'skill'

skills.forEach(skill => {       // 'forEach' percorre todos os elementos da array 'skills'
    skill.addEventListener("click", () => {     // 'addEventListener' adiciona um ouvinte de evento 'click' para cada elemento
        alert("Hard Skills utilizadas diariamente...");     // exibe o alert quando um elemento é clicado
    });

    skill.addEventListener("click", (evt) => {      // adiciona o ouvinte de evento 'click' para adicionar a classe 'destaque' ao elemento clicado
        const el = evt.target;      // 'evt.target' pega o elemento que disparou o evento
        el.classList.add("destaque");       // adiciona a classe 'destaque' ao elemento clicado
    });
});
