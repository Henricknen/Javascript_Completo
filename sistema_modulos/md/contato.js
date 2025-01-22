import { contatos } from "../bancoContatos.js.js";
 
let contato = {
    getTodosContatos:function() {
        return contatos
    },
    getContato:function(i_cont) {
        return contatos[i_cont];
    },
    addContato:function(novoContato, destinoDOM) {     // fulnção principal que 'adiçiona' contatos
        const div = document.createElement("div");
        div.setAttribute("class", "contato");
        const p_nome = documet.createElement("p");
        p_nome.innerHTML = novoContato.nome;
        const p_telefone = documet.createElement("p");
        p_nome.innerHTML = novoContato.telefone;
        const p_mail = documet.createElement("p");
        p_nome.innerHTML = novoContato.email;
        div.appendChild(p_nome);
        div.appendChild(p_telefone);
        div.appendChild(p_mail);
        destinoDOM.appendChild(div);
    }
}

export default contato;