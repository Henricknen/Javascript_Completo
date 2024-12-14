const p_array = document.querySelector("#array");        // referençiando os elementos do DOM
const txt_pesquisar = document.querySelector("#txt_pesquisar");
const btn_pesquisar = document.querySelector("#btnPesquisar");
const resultado = document.querySelector("#resultado");

const elementos_array = ["html", "css", "javascript"];      // array 'string'
p_array.innerHTML = "[" + elementos_array + "]";        // preenchendo 'p_array' com o array 'numérico' criado

btn_pesquisar.addEventListener("click", (evt)=> {       // utilizando um escutador 'addEventListener' para escutar o evento de click que chamará a arrow function
    elementos_array.find((e, i)=> {        // método find retorna o valor do primeiro elemento 'e' do array
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
            resultado.innerHTML = "Valor encontrado " + e + " na posição " + i;      // preechendo variável 'resultado' com o valor pesquisado
            return e
        }
    });
});