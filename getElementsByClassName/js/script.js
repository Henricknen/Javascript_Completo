const formacoes = [...document.getElementsByClassName("formacao")]       // 'getElementsByClassName' pega todos elemento de determinada classe, espeçificada no parâmetro
const formacoes_tec = [...document.getElementsByClassName("tecnico")]       // transformando 'array' em 'coleção' utilizando operador spread '...'
const formacoes_cur = [...document.getElementsByClassName("curso")]
const formacoes_pos = [...document.getElementsByClassName("pos")]

console.log(formacoes)
console.log(tecnico)
console.log(curso)

formacoes_pos.map((el) => {     // 'map' percorre todos elementos da classe 'formacoes_pos', 'el' representa um elemento individual do array em cada iteração
    el.classList.add("destaque")      // método 'classList' adiçiona a classe css 'destaque' ao 'el' elemento atual
})