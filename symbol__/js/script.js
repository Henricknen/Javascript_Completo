const nome = Symbol("nome");        // const nome é um symbol, já tem um valor único 
const numero = Symbol("numero");
const corUniforme = Symbol("cor do uniforme");

const Jogador = {       // objeto literal 'Jogador', inicializado com a propriedade 'nome'
    nome: "j1",
}

Jogador[numero] = 10,       // associando propriedade numero ao symbol
Jogador[corUniforme] = "verde"


for(p in Jogador) {
    console.log(p);     // imprime todas propriedades do 'Jogador'
}

console.log(Jogador);       // mostra todas propriedades
console.log(Jogador.nome);
console.log(Jogador[numero]);       // anotação de acesso direto
console.log(Jogador[corUniforme]);

// console.log(nome.description);      // 'description' mostra a descrição do symbol