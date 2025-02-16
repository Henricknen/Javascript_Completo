import {Cxmsg} from "./cxmsg.js";
const config = {
    cor: "#48f",
    tipo: "sn",     // 'propriedade' tipo
    textos: ["SIM", "NÃO"],
    comando_sn: ()=> {}     // propriedade comando_sn com uma arrow function que receberá a 'funcionalidade' do comando Sim
}

const fsim =()=> {      // função 'sfsim' será executada após o botão 'SIM' for mpressionado
    console.log("Botão SIM pressionado..");
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
    config.comando_sn =()=> {fsim()}        // passando função 'fsim' para o botão utilizando 'arrow function'
    Cxmsg.mostrar(config, "Codificando", "Javascript");
});

btn_mostrarcxmsg_3.addEventListener("click", ()=> {
    config.tipo = "sn";
    config.textos = ["OK", "CANCELA"]       // botão muda o texto conforme a 'posição'
    Cxmsg.mostrar(config, "Formação", "Pós Desenvolvimento Web/ Análise e Desenvolvimento de Sistemas/ Técnico em Informática para Internet/ Programador Front-End");
});     