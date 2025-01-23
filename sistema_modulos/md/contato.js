import { contatos } from "./bancoContatos.js";
 
let contato = {     // 'objeto literal' contato
    getTodosContatos:function() {       // função retorna 'todos' os contatos
        return contatos;
    },

    getContato:function(i_cont) {       // função retorna um contato 'espeçifico'
        return contatos[i_cont];
    },

    addContato:function(novoContato,destinoDOM) {     // função principal que 'adiçiona' contatos reçebendo como parâmetro o 'novoContato' e 'destinoDOM' local onde os contatos serão 'inseridos' no DOM
        const cont = {
            nome:novoContato.nome,
            telefone:novoContato.tefone,
            email:novoContato.email
        }
        contatos.push(cont);

        const div = document.createElement("div");      // criando uma 'div'
        div.setAttribute("class", "contato");       // adiçionando 'class contato' nesta div criada
        const p_nome = document.createElement("p");
         p_nome.innerHTML = novoContato.nome;        // 'p_nome' reçebe o novo contato que chega como parâmetro
        const p_telefone = document.createElement("p");
        p_telefone.innerHTML = novoContato.telefone;
        const p_mail = document.createElement("p");
        p_mail.innerHTML = novoContato.email;
        div.appendChild(p_nome);        // 'appendChild' adiçia p_nome na div
        div.appendChild(p_telefone);
        div.appendChild(p_mail);
        destinoDOM.appendChild(div);        // adiçionando a div com os elementos em 'destinoDOM'
    }
}

export default contato;     // exportanto o objeto literal