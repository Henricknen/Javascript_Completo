const caixa1 = document.querySelector("#caixa1");
const array_skill = ["Javascript", "PHP", "Laravel", "ReactJs", "VueJs", "HTML", "CSS"];

array_skill.map((el, chave)=> {      // 'map' percorre todo array 'array_skill' e para cada 'el' elemento do array faz as ações abaixo, tabém traz a chave dos elementos
    const novo_elemento = document.createElement("div");        // criando uma nova div utilizando métod 'reateElement'
    
    novo_elemento.setAttribute("id", "skill" + chave);     // método 'setAttribute' permite inserir um 'atributo' e o 'valor' do mesmo, aqui insere o atributo 'id' o seu 'valor' e a sua 'chave'
    novo_elemento.setAttribute("class", "hardskill");
    
    novo_elemento.innerHTML = el;
    caixa1.appendChild(novo_elemento);      // utilizando método 'appendChild' para anexa o novo_elemento dentro de caixa1
});
