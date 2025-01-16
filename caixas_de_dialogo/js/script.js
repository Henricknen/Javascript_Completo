const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", (evt)=> {
    alert("Alert é só uma caixa de menssagem com botão OK");
});

btn_confirm.addEventListener("click", (evt)=> {
    if(confirm("Estou codificando Javascript ?")) {      // diferente do Alert apresenta dois botões um 'Ok' e outro 'Cancelar'
        console.log("Sim estou codificando Javascript");
    } else {
        console.log("Não estou codificando Javascript");
    }
});

btn_prompt.addEventListener("click", (evt)=> {
    const nome = prompt("Digite seu nome: ");      // espera uma menssagem e retorna uma 'string' ou um 'null'
    if(nome == null) {
        console.log("Botão CANCELAR pressionado");
    } else {
        console.log("Nome digitado: " + nome);
    }
});