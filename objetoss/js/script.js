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
}


let c1 = new Carro("Ferrari", 1);       // instaciando um novo objeto passando o 'nome' e o 'tipo'
let c2 = new Carro("Chevrolet", 2);
let c3 = new Carro("Corolla", 3);
let c4 = new Carro("Carro Forte", 4);

console.log(c1.nome);       // imprimindo no console o nome do carro c1 chamando a 'propriedade' nome
console.log(c1.tipo);           // imprimindo no console o tipo do carro c1 chamando a 'propriedade' tipo
console.log(c2.nome);
console.log(c2.tipo);
console.log(c3.nome);
console.log(c3.tipo);
console.log(c4.nome);
console.log(c4.tipo);