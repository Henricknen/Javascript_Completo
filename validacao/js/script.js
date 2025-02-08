const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

DocumentTimeline.querySelector("#btn_validar").addEventListener("click", (evt)=> {      // adiçionando evento de 'click' no elemento de id 'btn_validar'
    let msg = null;

    if(!f_nota.checkValidity()) {

        msg = f_nota.validationMessage;     // utilizando propriedade 'validationMessage' uma menssagem de erro
    }

    f_msg.innerHTML = msg;
    evt.preventDefault();       // a utilização de 'preventDefault' evita que o botão não execute a ação de 'submit'
});