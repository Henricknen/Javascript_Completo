import {Cxmsg} from "./cxmsg.js";       // importando a classe 'Cxmsg'
const config = {        // método de 'configuração'
    cor: "#48f"
}

Cxmsg.config(config);       // chamando método de configuração

const btn_mostrarcxmsg_1 = document.querySelector("#btn_mostrarcxmsg_1");
const btn_mostrarcxmsg_2 = document.querySelector("#btn_mostrarcxmsg_2");
const btn_mostrarcxmsg_3 = document.querySelector("#btn_mostrarcxmsg_3");

Cxmsg.destino = document.body;

btn_mostrarcxmsg_1.addEventListener("click", ()=> {
    Cxmsg.mostrar("Profissional", "Luis Henrique Silva Ferreira");        // chamando import 'Cxmsg' no método 'mostrar'
});

btn_mostrarcxmsg_2.addEventListener("click", ()=> {
    Cxmsg.mostrar("Codificando", "Javascript");
});

btn_mostrarcxmsg_3.addEventListener("click", ()=> {
    Cxmsg.mostrar("Formação", "Pós Desenvolvimento Web/ Análise e Desenvolvimento de Sistemas/ Técnico em Informática para Internet/ Programador Front-End");
});