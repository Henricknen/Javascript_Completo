class Profissional {      // correção da classe Profissional
    constructor(pnome) {         
        this.nome = pnome;      
    }
}

let p1 = new Profissional("Luis Henrique S F");      
let p2 = new Profissional("Javascript");        
let p3 = new Profissional("ReactJs");
let p4 = new Profissional("VueJs");
let p5 = new Profissional("PHP");
let p6 = new Profissional("Laravel");

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);
console.log(p4.nome);
console.log(p5.nome);
console.log(p6.nome);

// ------------------------------------

class Carro {      // correção da classe Carro
    constructor(pnome, ptipo) {
       this.nome = pnome;
       if(ptipo == 1) {
        this.tipo = "Esportivo";
        this.velmax = 300;
       } else if(ptipo == 2) {
        this.tipo = "Ultilitário";
        this.velmax = 100;
       } else if(ptipo == 3) {
        this.tipo = "Passeio";
        this.velmax = 160;
       } else {
        this.tipo = "Militar";
        this.velmax = 180;
       }
    }

    getNome() {     
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getVelMax() {
        return this.velmax;
    }

    getInfo() {     
        return [this.nome, this.tipo, this.velmax];
    }

    setNome(nome) {     
        this.nome = nome;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }
    
    setVelMax(velmax) {
        this.velmax = velmax;
    }

    info() {        
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V. max: ${this.velmax}`);
        console.log("--------------------------------");
    }
}

let c1 = new Carro("Rapido", 1);       
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Completo", 3);
let c4 = new Carro("4x4", 4);

c1.setNome("Super veloz");      
c1.setVelMax(500);

c1.info();       
// c2.info();
// c3.info();
// c4.info();

// ------------------------------------
let carros = [];        // array 'carros' iniciado vazio

const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");

const addCarros = () => {  // função 'addCarros' adiciona o novo carro no array 'carros' e mostra no DOM
    res.innerHTML = "";     // limpando o elemento antes de adiçionar um novo carro
    carros.forEach(c => {  // utilizando 'forEach', que itera sobre o array
        const div = document.createElement("div");      // cria uma nova 'div' para cada carro
        div.setAttribute("class", "carro");
        div.innerHTML = `Nome: ${c.getNome()}<br/>Velocidade Máxima: ${c.getVelMax()}`;
        res.appendChild(div);       // adiciona a 'div' criada ao elemento 'res' no DOM
    });
};

btn_add.addEventListener("click", () => {       // função para adicionar um carro ao array 'carros'
    const nome = document.querySelector("#f_nome").value;
    const velmax = document.querySelector("#f_velmax").value;


    if (nome && velmax) {
        const novoCarro = new Carro(nome, parseInt(velmax));        // criando um novo objeto 'Carro'
        carros.push(novoCarro);     // adicionando o carro ao array 'carros'
        addCarros();        // chamando a função para atualizar o DOM com os carros        
    }
});
