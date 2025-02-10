const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (evt)=> {

});

let num = 10;
let codificando = "Javascript";

// LocalStorage

localStorage.setItem("nome", "Luis Henrique Silva Ferreira");
localStorage.setItem("profissional", "FullStack");
localStorage.setItem("codificando", codificando);

alert(localStorage.length);

alert(localStorage.getItem(localStorage.key(0)));

alert(localStorage.getItem("nome"));
alert(localStorage.getItem("profissional"));
alert(localStorage.getItem("codificando"));

localStorage.clear();

// SessionStorage

sessionStorage.setItem("nome", "Luis Henrique Silva Ferreira");
sessionStorage.setItem("profissional", "FullStack");
sessionStorage.setItem("codificando", codificando);