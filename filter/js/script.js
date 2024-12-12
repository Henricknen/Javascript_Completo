const caixa1 = document.querySelector("#caixa2");
const array_skill = ["Javascript", "PHP", "Laravel", "ReactJs", "VueJs", "HTML", "CSS"];
const btn_skill_selecionada = document.getElementById("btn_skill_selecionada");     // pegando botão do DOM

array_skill.map((el, chave)=> {
    const novo_elemento = document.createElement("div");    
    novo_elemento.setAttribute("id", "skill" + chave);
    novo_elemento.setAttribute("class", "hardskill");  
    novo_elemento.innerHTML = el;

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rd = document.createElement("input");
    rd.setAttribute("type", "radio");
    rd.setAttribute("name", "rd_skill");

    comandos.appendChild(rd);
    novo_elemento.appendChild(comandos);

    caixa2.appendChild(novo_elemento);
});

btn_skill_selecionada.addEventListener("click", (evt)=> {      // inserindo evento de click no botão de id 'btn_skill_selecionada', e utilizando uma 'arrow function' para interçepitar o evnto 'evt'
    const todos_radio = [...document.querySelectorAll("input[type=radio]")];        // pegando todos elementos que forem input do type 'radio' e transformando em array utilizando 'spread'
    let radio_selecionado = todos_radio.filter((ele, ind, arr)=> {      // utilizando 'filter' para fazer a filtragem em todos radios
        return ele.checked;     // retorna o elemento que estiver 'checked'
    });

    radio_selecionado = radio_selecionado[0];       // variável 'radio_selecionado' somente da possição 0 ou seja somente o radio selecionado
    const skill_selecionadaa = radio_selecionado.parentNode.previousSibling.textContent     // pegando o irmão anterior 'previousSibling' do parentNode apenas o texto 'textContent'
    alert("HardSkill seleçionada: " + skill_selecionadaa);      // imprimindo em alert a 'skill_selecionadaa'
}); 