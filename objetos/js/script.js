class Profissional {      // classe Profissional
    constructor(pnome) {     // método 'construtor' recebendo um parâmetro 'pnome', é automaticamente chamado quando é instaçiado um objeto desta classe
        this.nome = pnome;      // declarando variável 'nome' recebendo como valor o parâmetro 'pnome'
    }
}

let p1 = new Profissional("Luis Henrique S F");      // utilizando operador 'new' para instaçiar um novo objeto da classe 'Profissional'
let p2 = new Profissional("Javascript");                // instançiando novo objeto passando como parâmetro 'Javascript'
let p3 = new Profissional("ReactJs");       // ao instançiar a classe é neçessario passar um parâmetro
let p4 = new Profissional("VueJs");
let p5 = new Profissional("PHP");
let p6 = new Profissional("Laravel");

console.log(p1.nome);
console.log(p2.nome);
console.log(p3.nome);
console.log(p4.nome);
console.log(p5.nome);
console.log(p6.nome);