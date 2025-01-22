 class Form {
    static formacoes = ["Pós Desenvolvimento Web", "Superior Análise e Desenvolvimento de Sistemas", "Técnico em Informática para Internet", "Técnico Eletroeletrônica", "Curso Front End", "Curso Lógica de Programação"];     // criando propriedade estatica 'static', onde não é neçessario instançiar a classe para utiliza-la

    constructor(){}

    static getTodasFormacoes =()=> {     // método 'getTodasFormacoes'
        return this.formacoes;
    }

    static getSuperior =(i_formacoes)=> {     // método retorna uma formação espeçifica
        return this.formacoes[i_formacoes]
    }

    static addFormacao =(navaFormacao) => {
        this.formacoes.push(navaFormacao);
    }

    static apagarFormacoes =()=> {
        this.formacoes = [];
    }
}

export default Form;       // utilizando 'default' para exportar a 'classe' Form