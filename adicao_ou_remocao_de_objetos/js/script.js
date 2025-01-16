const palco = document.getElementById("palco");     // pegando elementos do DOM pelo 'id'
const num_objetos = document.getElementById("num_objetos");
const txt_qtd = document.getElementById("txt_qtde");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth;       // propriedade 'offsetWidth' pega a largura
let altura_Palco = palco.offsetHeight;      // propriedade 'offsetHeight' pega a altura
let bolas = [];     // array 'bolas'
let numBola = 0;

class Bola {
    constructor(arrayBolas, palco) {
        this.tam = Math.floor(Math.random() * 15) + 10;     // tamanho entre 10 e 25 pixels
        this.r = Math.floor(Math.random() * 255);        // cor aleatória
        this.g = Math.floor(Math.random() * 255); 
        this.b = Math.floor(Math.random() * 255);
        this.px = Math.floor(Math.random() * (larguraPalco - this.tam));        // posição inicial
        this.py = Math.floor(Math.random() * (altura_Palco - this.tam));
        this.velx = Math.floor(Math.random() * 2) + 0.5;        // velocidade X entre 0.5 e 2
        this.vely = Math.floor(Math.random() * 2) + 0.5;    // velocidade Y entre 0.5 e 2
        this.dirx = Math.random() * 10 > 5 ? 1 : -1;      // direção X
        this.diry = Math.random() * 10 > 5 ? 1 : -1;      // direção Y
        this.palco = palco;
        this.arrayBolas = arrayBolas;
        this.id = Date.now() + "_" + Math.floor(Math.random() * 100000000);
        this.desenhar();        // chama o método para desenhar a bolinha
        this.controle = setInterval(this.controlar.bind(this), 10);  // atualiza a posição a cada 10ms
        this.eu = document.getElementById(this.id);
        numBola++;
        num_objetos.innerHTML = numBola;
    }

    remover = () => {
        clearInterval(this.controle);
        bolas = bolas.filter((b) => b.id !== this.id);
        this.eu.remove();
        numBola--;
        num_objetos.innerHTML = numBola;
    }

    desenhar = () => {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.setAttribute("class", "bola");
        div.setAttribute("style", `left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`);
        this.palco.appendChild(div);
    }

    controle_bordas = () => {
        if (this.px + this.tam >= larguraPalco || this.px <= 0) {
            this.dirx = -this.dirx;     // inverte a direção no eixo X
        }

        if (this.py + this.tam >= altura_Palco || this.py <= 0) {
            this.diry = -this.diry;     // inverte a direção no eixo Y
        }
    }

    controlar = () => {
        this.controle_bordas();
        this.px += this.velx * this.dirx;       // atualiza a posição horizontal
        this.py += this.vely * this.diry;       // atualiza a posição vertical

        // atualiza a posição da bolinha na tela
        this.eu.style.left = `${this.px}px`;
        this.eu.style.top = `${this.py}px`;

        // se a bolinha sair da tela, remove ela
        if (this.px > larguraPalco || this.py > altura_Palco || this.px < 0 || this.py < 0) {
            this.remover();
        }
    }
}

// atualiza as dimensões do palco quando a tela for redimensionada
window.addEventListener("resize", (evt) => {
    larguraPalco = palco.offsetWidth;
    altura_Palco = palco.offsetHeight;
});

btn_add.addEventListener("click", (evt) => {
    const qtde = parseInt(txt_qtd.value);  // obtém a quantidade de objetos
    for (let i = 0; i < qtde; i++) {
        bolas.push(new Bola(bolas, palco));
    }
});

btn_remover.addEventListener("click", (evt) => {
    bolas.forEach((b) => {
        b.remover();
    });
});
