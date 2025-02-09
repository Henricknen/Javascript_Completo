const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let msg = null;
    if(f_nota.validity.valueMissing) {      // 'validity' é o estado atual da nota, propriedade 'valueMissing' verifica se o campo tem um valor valido ou esta vazio
        msg = "Este campo é obrigatório...";
    } else if(f_nota.validity.rangeOverflow) {      // propriedade'rangeOverflow' verifica se o valor do campo excede o valor maximo
        msg = "Nota alta...";
    } else if(f_nota.validity.rangeUnderflow) {     // propriedade 'rangeUnderflow' verifica se o valor do campo esta abaixo do valor minimo
        msg = "Nota baixa...";
    }   

    f_msg.innerHTML = msg;
    evt.preventDefault();
});