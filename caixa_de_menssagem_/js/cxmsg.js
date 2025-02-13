class Cxmsg {
    titulo = null;
    texto = null;
    cor = null;
    destino = null;
    divmsg = null;
    constructor(config) {
        this.titulo = config.titulo;
        this.texto = config.texto;
        this.cor = config.cor;
        this.destino = document.body;
    }

    mostrar =()=> {
        this.divmsg = document.createElement("div");        // criando uma 'div'
        const estilo_divmsg =       // string 'estilo_divmsg' contém os estilos da div
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "position: absoute;" +
            "top: 0px;" +
            "left: 0px;" +
            "width: 100%;" +
            "height: 100vh;" +
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo_divmsg);       // definindo o atributo 'style' para o valor contido na variável 'estilo_divmsg'
        this.destino.prepend(this.divmsg);      // adiçinando div 'divmsg' no destino 'body'
        
        const estilo_areaCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: flex-start;" +
            "flex-direction: column;" +
            "width: 300px;"
        const areaCxmsg = document.createElement("div");        // criando a 'areaCxmsg' será a área central onde estará os elementos 'titulo', 'corpo' e 'roda pé'
        areaCxmsg.setAttribute("style", estilo_areaCxmsg);
        this.divmsg.appendChild(areaCxmsg);
        
        const estilo_tituloCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 5px" +
            "border-radius: 5px 5px 0px 0px"

        const tituloCxmsg = document.createElement("div");      // crianção do 'titulo'
        areaCxmsg.setAttribute("style", estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.titulo;
        areaCxmsg.appendChild(tituloCxmsg);     // 'areaCxmsg' reçebe o titulo
    }

    ocultar =()=> {

    }
}