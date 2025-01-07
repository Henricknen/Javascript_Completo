class CarroPadrao {     // a classe 'CarroPadrao' é uma classe abstrata para todos os carros
    constructor() {
        if(this.constructor === CarroPadrao) {       // transformando classe 'CarroPadrao' em classe 'abstract', quando o construtor for chamada diparará uma exeção 'error'
            throw new TypeError("Esta classe não pode ser instanciada...");     // exeção 'error'
        }

        if(this.ligar === undefined) {        // se método 'ligar'
            throw new TypeError("É obrigatório implementar o método ligar...");          // apresenta esse 'error'
        }
        
        if(this.desligar === undefined) {        // se método 'desligar'
            throw new TypeError("Esta classe não pode ser instanciada...");     // apresenta esse 'error'
        }
        this.rodas = 4;
        this.portas = 4;
        this.ligado = false;
    }
}

class Carro extends CarroPadrao{       // toda classe vai herda a classe 'CarroPadrao'
    constructor(tipo, estagioTurbo) {
        super()
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1) {      
            this.velMax = 120       // criando a potencia
            this.nome = "Normal"        // nome do carro de acordo com seu tipo
        } else if(tipo == 2) {
            this.velMax = 160
            this.nome = "Esportivo"
        } else if(tipo == 3) {
            this.velMax = 200 
            this.nome = "Classico"
        }
        this.velMax += this.turbo.pot
    }

    info() {        // informações do CarroPadrao
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
            console.log(this.portas)
            console.log(this.ligado)
        console.log("--------------------")
    }

    ligar() {   // método 'ligar'
        this.ligado = true
    }

    desligar() {   // método 'desligar'
        this.ligado = false
    }
}

class Turbo {
    constructor(e) {
        if(e == 0) {
            this.pot = 0        // potencia do turbo
        } else if(e == 1) {
            this.pot = 50
        } else if(e == 2) {
            this.pot = 75
        } else if(e == 3) {
            this.pot = 100
        }
    }
}

class CarroProprio extends  Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo)
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = "Ferrari"
    }

    info() {        
        if(this.tipoInfo == 1) {
            super.info()
        } else {
            console.log(`Nome...:${this.nome}`)
            console.log(`Vel.Max:${this.velMax}`)
            console.log(`Turbo..:${this.turbo.pot}`)
            console.log("--------------------")
        }
    }
}


const c1 = new CarroProprio(3);
const c2 = new Carro(1, 1);
const c3 = new Carro(1, 0);
const c4 = new CarroPadrao();

c1.info()
c2.info()
c3.info()