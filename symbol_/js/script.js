    class Jogador {     // classe 'Jogador'
    constructor(nome) {
        this.nome = nome;
        this.id = Symbol();     // inserindo um 'symbol' dentro da propriedade 'id'
    }
}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4")]

let  s1 = jogadores[0].id;      // 'reçebendo' o symbol do jogador da posição 0

jogadores = jogadores.filter((j)=> {    // utilizando 'filter' para remover jogador
    return j.id != s1;      // retornando apenas jogadores com id 'diferente' de s1
});

console.log(jogadores);
console.log(s1);