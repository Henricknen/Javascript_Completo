const Nave = function(energia) {
    this.energia = energia      // propriedade 'energia'
    this.disparos = 100;     // propriedade 'disparos' com total de disparos permitidos
}

const n1 = new Nave(100);       // criação de novo objeto

Nave.prototype.vidas = 3;       // adiçionando propriedade 'vidas' na classe 'Nave' ultilizando 'prototype' 

Nave.prototype.disparar = function() {      // método que fará os disparos
    if(this.disparos > 0) {
        this.disparos--     // 'subtraindo' disparos
    }
}

n1.disparar();       // fazendo disparos
n1.disparar();
n1.disparar();

console.log(Nave);
console.log(n1);
console.log(n1.disparos);