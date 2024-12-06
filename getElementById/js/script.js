const dc1 = document.getElementById("c1")       // 'getElementById' pega o elemento espeçifico de id 'c1' e armazenando na const 'cd1'
console.log(dc1)        // imprimindo o 'elemento em si'
console.log(dc1. id)        // imprimindo o 'id' do elemento
console.log(dc1. innerHTML)     // imprimindo o 'innerHtml' do elemento

dc1.innerHTML = "JavaScript";      // alterando o valor da propriedade 'innerHTML' de 'dc1'

// -----------------------------------------------------------------------------------------------------

const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc2, dc3, dc4, dc5, dc6]        // criando array 'arrayElementos' com os elemento de id 'c2' a 'c6'
console.log(arrayElementos)     // exibe o array de elementos no console


// -----------------------------------------------------------------------------------------------------
for(d of arrayElementos)
d.innerHTML = "Programador FullStack";      // 'for' permite alterar o innerHTML de todos os elementos do 'arrayElementos' para 'Programador FullStack'

console.log(d)

// -----------------------------------------------------------------------------------------------------

arrayElementos.map((e) => {     // 'map' retorna cada um dos elementos do array 'arrayElementos'
    innerHTML = "Luis Henrique S. F.";
    console.log(e)
})









