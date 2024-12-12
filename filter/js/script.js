const caixa1 = document.querySelector("#caixa2");
const array_skill = ["Javascript", "PHP", "Laravel", "ReactJs", "VueJs", "HTML", "CSS"];
const btn_remove_skill = document.getElementById("btn_remover_skill");     // pegando botão do DOM de id 'btn_remover_skill'

array_skill.map((el, chave) => {
    const novo_elemento = document.createElement("div");
    novo_elemento.setAttribute("id", "skill" + chave);
    novo_elemento.setAttribute("class", "hardskill");
    novo_elemento.innerHTML = el;

    const comandos = document.createElement("div");
    comandos.setAttribute("class", "comandos");

    const rd = document.createElement("input");
    rd.setAttribute("type", "radio");

    comandos.appendChild(rd);
    novo_elemento.appendChild(comandos);

    caixa2.appendChild(novo_elemento);
});

const radio_selecionado = () => {       // função responsável de pegar o radio 'seleçionado'
    const todos_radio = [...document.querySelectorAll("input[type=radio]")];
    const radio_selecionado = todos_radio.filter((ele, ind, arr) => {
        return ele.checked;
    });

    return radio_selecionado[0];
}

btn_skill_selecionada.addEventListener("click", (evt) => {
    const rs = radio_selecionado();      // 'rs' obtém o conteúdo da função 'radio_selecionado'
    if(rs != undefined) {       // se 'rs' for diferente de 'undefined'
        const skill_selecionadaa = rs.parentNode.previousSibling.textContent
        alert("HardSkill seleçionada: " + skill_selecionadaa);      // apresenta um 'alert' com a skill seleçionada
    } else {
        alert("Seleçione uma Hard Skill...");
    }
});

btn_remove_skill.addEventListener("click", (evt) => {
    const rs = radio_selecionado();
    if(rs != undefined) {
        const skill_selecionadaa = rs.parentNode.parentNode
        skill_selecionadaa.remove();        // utilizando função 'remove' para remover skill seleçionada
    } else {
        alert("Seleçione uma Hard Skill...");
    }
});
