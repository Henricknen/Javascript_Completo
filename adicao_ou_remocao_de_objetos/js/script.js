const palco = document.getElementById("palco");
const num_objetos = document.getElementById("num_objetos");
const txt_qtd = document.getElementById("txt_qtd");
const btn_add = document.getElementById("btn_add");
const btn_remover = document.getElementById("btn_remover");

let larguraPalco = palco.offsetWidth;       // propriedade 'offsetWidth' pega a largura
let altura_Palco = palco.offsetHeight;          // propriedade 'offsetHeight' pega a altura
let bolas = [];     // array
let numBola = 0;