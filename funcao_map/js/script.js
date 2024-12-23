const formacao = ['Pós Desenvolvimento Web', 'Superior Análise e Desenvolvimento de Sistemas', 'Técnico Informática para internet', 'Técnico Eletroeletrônica', 'curso Front End', 'curso Lógica de Programação'];       // array com minhas formações
formacao.map((el, i) => {      // em 'map' é possivel passar dois parâmetros, 'el' é o elemento do array, 'i' é o indice 'posição' deste elemento
    console.log("formacão: " + el + " posição da formação é " + i)
});

// ---------------------------------------------------------------------------------------------------------------

const repositorios = ['HTML', 'SQL', 'JAVASCRIT', 'PHP', 'REACT']
let r = repositorios.map((el, i) => {      // bariável 'r' que recebe o retorno do método 'map'
    return el   // retornando o elemento
})

console.log(r)      // imprime no console o tetorno de 'repositorio'