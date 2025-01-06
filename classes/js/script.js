const f_tipoMilitar = document.querySelector("#f_tipoMilitar");       // pegando o o input de id 'f_tipoMilitar' pra realizar a função de 'cheked'
const f_tipoNormal = document.querySelector("#f_tipoNormal");            // pegando o input de id 'f_tipoNormal'
const f_blindagem = document.querySelector("#f_blindagem");
const f_municao = document.querySelector("#f_municao");
const f_nome = document.querySelector("#f_nome");
const f_portas = document.querySelector("#f_portas");
const carros = document.querySelector("#carros");
const btn_addCarro = document.querySelector("#btn_addCarro");

let a_carros = [];      // variável a_carro é um array em branco

f_tipoMilitar.addEventListener("click", (evt)=> {       // adiçinando evento de click quando o input 'militar' for clicado
    f_nome.value = "";      // limpando o input 'nome'
    f_portas.value = 0;         // zerando o input 'portas'
    f_blindagem.value = 0;
    f_municao.value = 0;
    f_blindagem.removeAttribute("disabled");         // 'removeAttribute' remove o atributo 'disabled', ativando o input de blidagem 
    f_municao.removeAttribute("disabled");
});

f_tipoNormal.addEventListener("click", (evt)=> {
    f_nome.value = "";
    f_portas.value = 0;
    f_blindagem.value = 0;     // 'redefine' o campo input para 0
    f_municao.value = 0;
    f_blindagem.setAttribute("disabled", "disabled");       // 'setAttribute' atribui o atributo 'disabled' desativando o input de blidagem
    f_municao.setAttribute("disabled", "disabled");
});

const gerenciarExibicaoCarros =()=> {       // função 'gerenciarExibicaoCarros()' mostra todos carros que estão no array 'a_carros'
    carros.innerHTML = ""       // zerando o conteudo de 'carros'
    a_carros.forEach((c) => {
        const div = document.createElement("div");   // 'createElement' criará novo carro
        const btn = document.createElement("button");
        
        div.setAttribute("class", "carro");
        div.setAttribute("data-nome", c.nome);
        div.innerHTML = `Nome: ${c.nome}<br/>`;     // adiçionando a propriedade nome no DOM
        div.innerHTML += `Portas: ${c.portas}<br/>`;
        div.innerHTML += `Cor: ${c.cor}<br/>`;
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`;
        div.innerHTML += `Municao: ${c.municao}<br/>`;
        div.appendChild(btn);
        carros.appendChild(div);     // 'appendChild' mostrará todos carros que estão no array carros
        
    });
}

btn_addCarro.addEventListener("click", ()=> {
    if(f_tipoNormal.checked) {      // verifica se carro 'tipoNormal' está seleçionado
        const c = new Carro(f_nome.value, f_portas.value);
        a_carros.push(c);    // adiçionando novo carro 'tipoNormal' no array 'a_carros'
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value);
        a_carros.push(c);    // adiçionando novo carro Militar no array 'a_carros'
    }
    gerenciarExibicaoCarros();       // chamando a função 'gerenciarExibicaoCarros'
});

class Carro {       // classe carro é uma clase 'pai/ base' será uma referênçia para outras classes
    constructor(nome, portas) {     // 'constructor' é o método que é chamado 'automaticamente' quando uma classe é instanciada
        this.nome = nome;     // propriedade 'nome'
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    }

    ligar = function() {        // método para ligar
        this.ligado = true;
    }

    desligar = function() {        // método para desligar
        this.ligado = false;
    }

    setCor = function(cor) {        // método 'setCor' que define a cor do carro
        this.cor = cor;
    }
}

class Militar extends Carro {       // o comando 'extends' define que a classe Militar 'filho' vai 'herdar' todos elementos 'propriedade, metodos' da classe Carro 'pai'
    constructor(nome, portas, blindagem, municao) {     // passando propriedades nome e portas da classe 'pai', já blindagem e munição é propriedades da classe filho
        super(nome, portas);     // 'super' invoca o construtor da classe Pai
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Verde");       // setando 'atribuindo' a cor Verde para o carro Militar
    }

    atirar = function() {       // método 'atirar'
        if(this.municao > 0) {
            this.municao--
        }
    }
}

const c1 = new Carro("Normal", 4);        // criando novo 'Carro'
c1.ligar();      // chamando o método 'ligar' para ligar o carro
c1.setCor("Preto");     // definido a cor como preta

const c2 = new Militar("z-400 attack", 1, 100, 50);        // classe Filho, passando nome, quantidade de portas, blindagem e quantidade de munição como parâmetros
c2.atirar();     // chamando o método 'atirar' é o mesmo que dar tiros ou seja tira uma munição da quantidade total
c2.atirar();
c2.atirar();

console.log(`Nome: ${c1.nome}`);        // imprimindo informações do carro c1
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado?"Sim":"Não"}`);     // ultilizando operação ternaria '?"Sim":"Não"'
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log("-----------------");

console.log(`Nome: ${c2.nome}`);     // ultilizando template string '`${}`'
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${c2.ligado?"Sim":"Não"}`);     // ultilizando operação ternaria '?"Sim":"Não"'
console.log(`Velocidade: ${c2.vel}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Municao: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
console.log("-----------------");