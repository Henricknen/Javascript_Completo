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