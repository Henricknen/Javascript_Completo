const palco = document.getElementById("palco");     // pegando elementos do DOM pelo 'id'
const num_objetos = document.getElementById("num_objetos");
const txt_qtd = document.getElementById("txt_qtd");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth;       // propriedade 'offsetWidth' pega a largura
let altura_Palco = palco.offsetHeight;          // propriedade 'offsetHeight' pega a altura
let bolas = [];     // array
let numBola = 0;

class Bola {
    constructor(arrayBolas, palco) {        // ao instançiar um objeto é necessário passar o 'arrayBolsas' e o 'palco'
        this.tam = math.floor(Math.random() * 15) + 10;      // definindo o 'tamanho' da variável tam utilizando 'método' Math
        this.r = math.floor(Math.random() * 255);       // definindo as cores
        this.g = math.floor(Math.random() * 255);
        this.b = math.floor(Math.random() * 255);
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));        // define a posição de onde a bolinha ficará
        this.py = Math.floor(Math.random() * (altura_Palco - this.tam));
        this.velx = Math.floor(Math.random() * 2) + 0.5;        // definindo as 'veloçidades máximas'
        this.vely = Math.floor(Math.random() * 2) + 0.5;
        this.dirx = Math.random() * 10 > 5 ? 1 : -1;        // definindo as 'direções'
        this.diry = Math.random() * 10 > 5 ? 1 : -1;
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000);
        this.desenhar();        // chamando método 'desenhar'
        this.controle = stInterval(this.controlar, 10);
        this.controle = document.getElementById(this.id);
        this.eu = ""
    }

    minhaPos =()=> {        // método 'minhaPos' verifica qual é a posição da bolinha

    }

    remover =()=> {     // método 'remover' remove a bolinha

    }

    desenhar =()=> {        // método 'desenhar' desenha, cria a bolinha
        
    }

    controlar =()=> {       // método 'controlar' controla a movimentação da bolinha

    }
}

window.addEventListener("resize", (evt)=> {     // adiçionando evento quando a tela for redimensionada
    let larguraPalco = palco.offsetWidth;
    let altura_Palco = palco.offsetHeight;     
});

btn_add.addEventListener("resize", (evt)=> {
    const qtde = txt_qtde.value;        // obtendo a quantidade de objetos
    for(let i = 0; i < qtde; i++) {
        // instanciar novos objetos
    }
});

btn_remover.addEventListener("resize", (evt)=> {
    bolas.map((b)=> {       // utilizando função map para percorrer elemento por elemento que estiver dentro do array bolas
        // criar função para remove bolinhas
    });
});