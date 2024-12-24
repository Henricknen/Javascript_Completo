function aluno(nome, nota) {
    this.nome = nome;        // 'this.' faz a distinção da variavel 'nome' com o parametro de entrada 'nome'
    this.nota = nota;

    this.dados_anonimo = function() {       // função anônima utilizando 'function'
        setTimeout(function() {     // 'setTimeout' executa a função após um atraso de tempo especificado
            console.log(this.nome);  // O valor de 'this' pode se referir ao objeto global (window no navegador) devido à função tradicional dentro do 'setTimeout'
            console.log(this.nota);
        }, 2000)        // '2000' 2 segundos é o tempo de atraso
    }

    this.dados_arrow = function() {
        setTimeout(()=> {     // 'setTimeout' executa ao invés de executar uma funão anõnima normal executa uma 'arrow function'
            console.log(this.nome);  // Com as funções arrow, o 'this' se refere ao contexto léxico, ou seja, o objeto 'aluno', garantindo acesso correto às propriedades 'nome' e 'nota'
            console.log(this.nota);
        }, 2000);
    }
}

const al1 = new aluno("Luis henrique", 10);      // passando o valor do nome e da nota
al1.dados_anonimo();     // chamando a função tradicional
al1.dados_arrow();     // chamando a função arrow
