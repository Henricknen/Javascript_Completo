class Profissinal {
    static f = "Formação";      // definindo variável f com 'static'
    constructor(formacoes) {
        this.formacoes = formacoes;
    }

    info = function() {
        console.log(`${Profissinal.f}`);
        console.log(`${this.formacoes}`);
        console.log("--------------------");
    }
    
    static form = function() {       // método 'static'
        Profissinal.f = "Formaçãoooo";       // alterando o valor da variável estática f
    }
}

const formacao1 = new Profissinal("Pos Desenvolvimento Web");       // instançiando classe 'Profissional' e passando uma formação
const formacao2 = new Profissinal("Graduação Análise e Desenvolvimento do Sistemas");
const formacao3 = new Profissinal("Técnico Informatica para Internet");
const formacao4 = new Profissinal("Técnico Eletroletrônica");
const formacao5 = new Profissinal("Curso Lógica de Programação");
const formacao6 = new Profissinal("Curso Front End");

// Profissinal.f = "Formaçãoo";
Profissinal.form();     // chamando método 'static' form, alterando a propriedade estática f para "Formaçãoooo"

formacao1.info();
formacao2.info();
formacao3.info();
formacao4.info();
formacao5.info();
formacao6.info();