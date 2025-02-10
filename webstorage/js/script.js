const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener("click", (evt)=> {

});

let num = 10;       // variáveis
let codificando = "Javascript";

// LocalStorage

localStorage.setItem("nome", "Luis Henrique Silva Ferreira");       // utilizando o metodo 'setItem' onde é necessário inserir a chave e valor que será 'armazenado' no localStorage
localStorage.setItem("profissional", "FullStack");
localStorage.setItem("codificando", codificando);

alert(localStorage.length);     // obtendo o 'tamanho' do localStorage

alert(localStorage.getItem(localStorage.key(0)));       // utilizando 'key' para localizar uma chave em uma posição espeçifica

alert(localStorage.getItem("nome"));        // método 'getItem' é utilizado para 'obter' o valor da chave
alert(localStorage.getItem("profissional"));
alert(localStorage.getItem("codificando"));

localStorage.clear();       // 'limpa' as chaves do localStorage 

// SessionStorage

sessionStorage.setItem("nome", "Luis Henrique Silva Ferreira");
sessionStorage.setItem("profissional", "FullStack");
sessionStorage.setItem("codificando", codificando);