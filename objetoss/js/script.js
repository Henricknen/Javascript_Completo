class Carro {      // classe Carro
    constructor(pnome, ptipo) {     // passando no método 'construtor' o nome e o 'tipo' do 'carro' como parâmetro 
       this.nome = pnome;

       if(ptipo == 1) {     // executando 'condição' com base na 'propriedade' tipo do carro
        this.tipo = "Esportivo";        // definindo 'propriedade' 'tipo' do carro
        this.velmax = 300;      // definindo a velocidade máxima do carro utilizando 'propriedade' 'velmax'
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

    getNome() {     // método 'getNome' retorna o nome que está definindo na 'propriedade' nome
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getVelMax() {
        return this.velmax;
    }


    getInfo() {     
        return [this.nome, this.tipo, this.velmax];     // método 'getInfo' retorna as propriedades em um array 
    }




    info() {        // método 'info' retorna todas propriedade de uma única vez
        console.log("----------------------------");
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V. Max: ${this.velmax}`);
        console.log("----------------------------");
    }
}


let c1 = new Carro("Ferrari", 1);       // instaciando um novo objeto passando o 'nome' e o 'tipo'
let c2 = new Carro("Chevrolet", 2);
let c3 = new Carro("Corolla", 3);
let c4 = new Carro("Carro Forte", 4);

console.log(c1.nome);       // imprimindo no console o nome do carro c1 chamando a 'propriedade' nome
console.log(c1.tipo);           // imprimindo no console o tipo do carro c1 chamando a 'propriedade' tipo

c2.info();      // chamando o método 'info' que exibirá as informações do carro 2

console.log(c3.getNome());      // imprimindo o nome do carro c3 utilizando método 'getNome'

console.log(c4.getInfo());       // imprimindo o array com 'todas propriedades' de c4