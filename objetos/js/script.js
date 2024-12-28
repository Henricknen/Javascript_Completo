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

