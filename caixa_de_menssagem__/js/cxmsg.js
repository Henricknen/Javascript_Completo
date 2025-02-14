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
        this.divmsg = document.createElement("div");
        const estilo_divmsg =
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "position: absolute;" +
            "top: 0px;" +
            "left: 0px;" +
            "width: 100%;" +
            "height: 100vh;" +
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute("id", "divmsg");
        this.divmsg.setAttribute("style", estilo_divmsg);
        this.destino.prepend(this.divmsg);
        
        const estilo_areaCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: flex-start;" +
            "flex-direction: column;" +
            "width: 300px;"
        const areaCxmsg = document.createElement("div");
        areaCxmsg.setAttribute("style", estilo_areaCxmsg);
        this.divmsg.appendChild(areaCxmsg);
        
        const estilo_tituloCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 5px;" +
            "border-radius: 5px 5px 0px 0px;"

        const tituloCxmsg = document.createElement("div");
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg);
        tituloCxmsg.innerHTML = this.titulo;
        areaCxmsg.appendChild(tituloCxmsg);
        
        const estilo_corpoCxmsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #eee;" +
            "color: #000;" +
            "padding: 30px 5px;"

        const corpoCxmsg = document.createElement("div");      // criação da 'div' que será o 'corpo'
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg);
        corpoCxmsg.innerHTML = this.texto;
        areaCxmsg.appendChild(corpoCxmsg);
    }

    ocultar =()=> {

    }
}