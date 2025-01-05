const Pessoa = {        // objeto 'Pessoa'
    nome:"Luis Henrique S. F.",      // 'propriedade' nome reçebendo a string 'Luis Henrique S. F.' utilizando os ':'
    getNome:function() {        // método
        return this.nome;
    },

    setNome:function(nome) {        // função que irá 'setar' alterar ou atribuir um novo nome
        this.nome = nome;
    }
}

const p2 = Pessoa;      // 'p2' e 'p3' imprime o mesmo nome que está definido na propriedade nome do objeto 'Pessoa'
const p3 = Pessoa;

p3.nome = "Javascript";    // 'p3' reçebendo 'Javascript' 
p2["nome"] = "LHSF";        // 'p2' reçebendo string 'LHSF'
Pessoa.setNome("FullStack");        // 'FullStack' é o novo nome que será 'setado' atribuido a variável nomo do objeto 'Pessoa'

console.log(Pessoa.nome);       // imprimindo a 'propriedade' nome do Objeto 'Pessoa'
console.log(p2.getNome());
console.log(p3.nome);       // mesmo atribuida a string 'Javascript' em p3, p3 ainda imprimirá o nome da propriedade do objeto 'Pessoa'