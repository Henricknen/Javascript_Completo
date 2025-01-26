    class Jogador {     // classe 'Jogador'
    constructor(nome) {
        this.nome = nome;
        this.id = Symbol();     // inserindo um 'symbol' dentro da propriedade 'id'
    }
}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j3"), new Jogador("j1"), new Jogador("j3")];

let  s1 = jogadores[0].id;      // 'reçebendo' o symbol do jogador da posição 0
let s = [];

let s_jogadores =jogadores.filter((j)=> {
    return j.nome == "j1";      // retorna apenas os jogadores com nome igual a j1
});

jogadores = jogadores.filter((j)=> {    // utilizando 'filter' para remover jogador
    // return j.id != s1;      // retornando apenas jogadores com id 'diferente' de s1
    return j.nome != "j1";
});

s = s_jogadores.map((j)=> {
    return j.id     // retorna os symbol's do jogador j1
});

console.log(jogadores);
console.log(s_jogadores);
console.log(s1);
console.log(s);