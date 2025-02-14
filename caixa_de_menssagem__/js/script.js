const config ={
    titulo: "Codificando JavaScript - Profissional",
    texto: "Luis Henrique Silva Ferreira",
    cor: "#48f"
}

const cxmsg = new Cxmsg(config);        // instançianodo objeto

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg");

btn_mostrarcxmsg.addEventListener("click", ()=> {
    cxmsg.mostrar();        // chamando o método 'mostrar'
});