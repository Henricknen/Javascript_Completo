class Profissional {      // criando uma classe chamada 'Profissional'
    constructor(pnome) {         // método 'construtor', que é chamado automaticamente quando se instancia um objeto dessa classe, recebendo um parâmetro chamado 'pnome'
        this.nome = pnome;      // 'nome' é uma 'propriedade' do objeto da classe, que recebe o valor do parâmetro 'pnome'
    }
}

let p1 = new Profissional("Luis Henrique S F");      // o operador 'new' permite instançiar um novo 'objeto' da classe 'Profissional'
let p2 = new Profissional("Javascript");        // passando 'parâmetro' Javascript nas instançiação
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

// ----------------------------------------------------------------------

class Carro {      // classe 'Carro'
    construtor(pnome, ptipo) {      // passando como parâmetro no contrutor 'pnome' e 'ptipo'
       this.nome = pnome
       if(ptipo == 1) {
        this.tipo = "Esportivo"
        this.velmax = 300
       } else if(ptipo == 2) {
        this.tipo = "Ultilitario"
        this.velmax = 100
       } else if(ptipo == 3) {
        this.tipo = "Passeio"
        this.velmax = 160
       } else {
        this.tipo = "Militar"
        this.velmax = 180
       }
    }

    getNome() {     // método 'getNome' retornará o nome do objeto
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getVelMax() {
        return this.vemax
    }

    getInfo() {     // método 'getInfo' retorna o 'nome' o 'tipo' e a 'velmax' em um array
        return [this.nome, thhis.tipo, this.velmax]
    }

    setNome(nome) {     // método 'setNome' define um nome 
        this.nome = nome
    }

    setTipo(tipo) {
        this.tipo = tipo
    }
    
    setVelMax(velmax) {
        this.velmax = velmax
    }

    info() {        // método 'info' retorna todas as propriedades de uma única vez
        console.log(`Nome: ${this.nome}`);     // utilizando 'tempate string' `${}`
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V. max: ${this.velmax}`);
        console.log("--------------------------------");
    }
}

let c1 = new Carro("Rapido", 1);       // passando 'nome' e 'tipo' na 'instançiação'
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Completo", 3);
let c4 = new Carro("4x$", 4);

c1.setNome("Super veloz");      // 'alterando' o nome de c1
c1.setVelMax(500);

c1.info();       // chamando o métoddo 'info'
// c2.info();
// c3.info();
// c4.info();

// console.log(c1.getNome());  // imprime o nome do carro 1
// console.log(c1.getInfo());       // chamando o método 'getInfo()'