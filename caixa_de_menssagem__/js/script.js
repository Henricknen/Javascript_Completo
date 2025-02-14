const config ={
    cor: "#48f"
}

const cxmsg = new Cxmsg(config);        // instançianodo objeto

const btn_mostrarcxmsg_1 = document.querySelector("#btn_mostrarcxmsg_1");
const btn_mostrarcxmsg_2 = document.querySelector("#btn_mostrarcxmsg_2");
const btn_mostrarcxmsg_3 = document.querySelector("#btn_mostrarcxmsg_3");

btn_mostrarcxmsg_1.addEventListener("click", ()=> {
    cxmsg.mostrar("Profissional", "Luis Henrique Silva Ferreira");        // chamando o método 'mostrar' passando como parâmetro o 'titulo' e o 'texto' da caixa de texto
});

btn_mostrarcxmsg_2.addEventListener("click", ()=> {
    cxmsg.mostrar("Codificando", "Javascript");
});

btn_mostrarcxmsg_3.addEventListener("click", ()=> {
    cxmsg.mostrar("Formação", "Pós Desenvolvimento Web");
});