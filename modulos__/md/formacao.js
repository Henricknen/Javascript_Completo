const formacoes = ["Pós Desenvolvimento Web", "Superior Análise e Desenvolvimento de Sistemas", "Técnico em Informática para Internet", "Técnico Eletroeletrônica", "Curso Front End", "Curso Lógica de Programação"];

export default function getTodasFormacoes() {
    return formacoes;
}

function getForm(i_form) {      // função 'getForm' retorna um item espeçifico
    return formacoes[i_form];       // indiçe que acessa o valor correposndente
}

export {formacoes, getForm}