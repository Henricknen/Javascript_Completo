import c from "../contatos.js.js";
const listaContatos = document.getElementById("listaContatos");
const btn_gravar = document.getElementById("btn_gravar");

btn_gravar.addEventListener("click", (evt)=> {
    const cont = {
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("t_telefone").value,
        email:document.getElementById("t_email").value
    }
    c.addContato(cont, listaContatos);
});