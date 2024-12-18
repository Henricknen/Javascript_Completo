const tecnico1 = {nome: "Informatica para internet", ano:2021}      // objeto 'tecnico1'
const tecnico2 = {nome: "Eletroeletrônica", ano:2021}
const formacao_tecnica = {...tecnico1, ...tecnico2}     // ultilizando spread '...' para concaternar objetos 'tecnico1' e 'tecnico2'

console.log(formacao_tecnica);

// ------------------------------------------------------------------------------------------------------------

const soma =(v1, v2, v3)=> {        // função com 'propriedades' v1, v2 e v3
    return v1 + v2 + v3;
}

let valores = [2, 5, 7, 9, 4] ;     // variável de valores

console.log(soma(...valores));      // operador 'spread' espalha os 'valores' para cada 'propriedade' da função, pegando a quantidade de valores igual a quantidade de propriedades

// ------------------------------------------------------------------------------------------------------------

const objs1 = document.getElementsByName("div");      /* retorna uma coleção de elementos html neste caso será as 'div' */
const objs2 = [...document.getElementsByName("div")];        /* ultlizando 'spread' transforma objs em um array */

console.log(objs1);
console.log(objs2);