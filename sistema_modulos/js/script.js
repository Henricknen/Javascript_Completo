import c from "../contatos.js";      // importando 'módulo' contatos
const listaContatos = document.getElementById("listaContatos");     // pegando elemento de id 'listaContatos'
const btn_gravar = document.getElementById("btn_gravar");

btn_gravar.addEventListener("click", (evt)=> {      // adiçionando evento de click no botão
    const cont = {
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value
    }
    c.addContato(cont,listaContatos);       // passado o contato 'cont' e o destino no DOM 'listaContatos'
    console.log(c.getTodosContatos());
});