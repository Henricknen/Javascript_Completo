class Cxmsg {       // classe 'Cxmsg' de configuração
    titulo = null;      // 'propriedade' titulo
    texto = null;
    cor = null;
    destino = null;
    divmsg = null;
    constructor(config) {       // construtor da classe reçebe a 'configuração' da classe
        this.titulo = config.titulo;
        this.texto = config.texto;
        this.cor = config.cor;
        this.destino = document.body;
    }

    mostrar =()=> {     // método para mostrar a caixa de menssagem
        console.log(this.texto);
    }

    ocultar =()=> {

    }
}