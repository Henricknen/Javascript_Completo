function Carro(pnome, pvelmax) {        // substituindo 'class' pro 'function'
    this.nome = pnome,
    this.velmax = pvelmax,

    this.getNome = function() {     // inserindo 'this' nos métodos assim como nas propriedades
        return this.nome;
    },

    this.getVelMax = function() {
        return this.velmax;
    },

    this.setNome = function(nome) {
        this.nome = nome;
    },

    this.setVelmax = function(velmax) {
        this.velmax = velmax;
    },

    info = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Veloçidade Máxima: ${this.velmax}`);
        console.log("-----------------------");
    }
}

let carros = [];

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addCarros = () => {
    res.innerHTML = "";

    carros.forEach(c => {
        const div = document.createElement("div");
        div.setAttribute("class", "carro");
        div.innerHTML = `Nome: ${c.getNome()}<br/>Velocidade Máxima: ${c.getVelMax()}`;
        res.appendChild(div);
    });
};

btn_add.addEventListener("click", () => {
    const nome = document.querySelector("#f_nome").value;
    const velmax = document.querySelector("#f_velmax").value;

    if (nome && velmax) {
        const novoCarro = new Carro(nome, parseInt(velmax));
        carros.push(novoCarro);
        addCarros();

        document.querySelector("#f_nome").value = "";
        document.querySelector("#f_velmax").value = "";

        document.querySelector("#f_nome").focus();
    }
});