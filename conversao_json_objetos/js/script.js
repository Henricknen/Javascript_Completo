const profissional = {        // objeto literal 'profissional'
    nome: "Luis Henrique Silva Ferreira",
    pos_graduacao: "Desenvolvimento Web",
    graduacao: "Analise e desenvolvimento de sistesmas",
    tecnico: "Informatica para internet",
    tecnico: "Eletroeletrônica",
    cursos: {
        curso1: "Lógica de programação",
        curso2: "Front End",
    }    
}

// console.log(pessoa)
// console.log(pessoa.nome)        // ultilizando parte espeçifica do objeto
// console.log(pessoa.cursos.curso2)       // immprimindo 'curso' espeçifico

const string_profissional = '{"nome":"Luis Henrique Silva Ferreira","graduacao":"Analise e desenvolvimento de sistesmas","tecnico":"Eletroeletrônica","cursos":{"curso1":"Lógica de programação","curso2":"Front End"}}';       // 'string_profissional' é uma string 'JSON'

const s_json_profissional = JSON.stringify(profissional);     // método 'stringify' converte o 'objeto literal' profissional em uma string 'JSON'
const o_json_profissional = JSON.parse(string_profissional);       // 'parse' converte a string JSON'string_profissional' em um 'objeto JSON'

console.log(profissional);      // imprimindo o 'objeto literal'
console.log(s_json_profissional);       // imprimindo o objeto literal convertido em 'JSON'
console.log(o_json_profissional);