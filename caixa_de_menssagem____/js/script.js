import {Cxmsg} from "./cxmsg.js";
const config = {
    cor: "#48f",
    tipo: "sn",
    textos: ["SIM", "NÃO"],
    comando_sn: ()=> {}
}

const fsim =()=> {
    console.log("Botão SIM pressionado");
}

const btn_mostrarcxmsg_1 = document.querySelector("#btn_mostrarcxmsg_1");
const btn_mostrarcxmsg_2 = document.querySelector("#btn_mostrarcxmsg_2");
const btn_mostrarcxmsg_3 = document.querySelector("#btn_mostrarcxmsg_3");

btn_mostrarcxmsg_1.addEventListener("click", ()=> {
    config.tipo = "ok";
    Cxmsg.mostrar(config, "Profissional", "Luis Henrique Silva Ferreira");      // toda vez que o método mostra for chamado será necessário passar a configuração 'config'
});

btn_mostrarcxmsg_2.addEventListener("click", ()=> {
    config.tipo = "sn";
    config.comando_sn =()=> {fsim()}
    Cxmsg.mostrar(config, "Codificando", "Javascript");
});

btn_mostrarcxmsg_3.addEventListener("click", ()=> {
    config.tipo = "sn";
    config.textos = ["OK", "CANCELA"]
    Cxmsg.mostrar(config, "Formação", "Pós Desenvolvimento Web/ Análise e Desenvolvimento de Sistemas/ Técnico em Informática para Internet/ Programador Front-End");
});