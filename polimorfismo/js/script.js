class Carro {       // classe Carro
    constructor(tipo, estagioTurbo) {       // iniçiando as propriedades 'tipo' e 'estagioTurbo'
        this.turbo = new Turbo(estagioTurbo);  // cria um objeto Turbo e associa ao carro com base no estágio do turbo
        if(tipo == 1) {      
            this.velMax = 120;       // criando a potencia
            this.nome = "Normal";         // nome do carro de acordo com seu tipo
        } else if(tipo == 2) {
            this.velMax = 160;
            this.nome = "Esportivo"; 
        } else if(tipo == 3) {
            this.velMax = 200; 
            this.nome = "Classico";
        }
        this.velMax += this.turbo.pot;      // aumenta a velocidade máxima do carro com a potência do turbo
    }

    info() {        // função 'info' é responsável por gerar as informações do carro
        console.log(this.nome);
        console.log(this.velMax);
        console.log(this.turbo);
        console.log("--------------------");
    }
}

class Turbo {
    constructor(e) {        // construtor reçebendo estágio 'e' como parâmetro
        if(e == 0) {
            this.pot = 0        // definindo 'pot' potencia do turbo em 0
        } else if(e == 1) {
            this.pot = 50
        } else if(e == 2) {
            this.pot = 75
        } else if(e == 3) {
            this.pot = 100;
        }
    }
}

class CarroProprio extends  Carro {     // 'CarroProprio' que herda os dados de 'Carro'
    constructor(estagioTurbo) {     // o 'tipo' já está definido, passando o 'estagioTurbo' como parâmetro
        super(4, estagioTurbo);      // 'super' tem a função de chamar o construtor da classe pai com os parâmetros 'tipo' e 'estagioTurbo'
        this.tipoInfo = 1;
        this.velMax = 200 + this.turbo.pot;      // definindo a 'velMax' do carro do 'tipo' 4 e somado mais a potência do 'turbo'
        this.nome = "Ferrari";           // definição do 'nome'
    }

    info() {        // novo método 'info' definido na classe filha
        if (this.tipoInfo == 1) {       // se 'tipoInfo' for igual a 1, chama o método 'info' da classe pai
            super.info();       // 'super' chama o método 'info' da classe pai
        } else {        // caso contrário, usa o método 'info' da classe filha
            console.log(`Nome...:${this.nome}`);
            console.log(`Vel.Max:${this.velMax}`);
            console.log(`Turbo..:${this.turbo.pot}`);
            console.log("--------------------");
        }
    }
    
}

const c1 = new Carro(1, 0);      // criação de novo carro 'c1' e passando parâmetros 'tipo' e 'turbo' 
const c2 = new Carro(1, 1);
const c3 = new CarroProprio(3);      // 'CarroProprio' por herdar a classe 'Carro' não é necessário passar o 'tipo' que ele automaticamente só será passar o etágio do 'turbo' será '3'

c1.info();
c2.info();
c3.info();