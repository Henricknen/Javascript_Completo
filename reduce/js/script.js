const p_array = document.querySelector("#array");
const btn_reduzir = document.querySelector("#btnReduzir");
const resultado = document.querySelector("#resultado");

const elementos_array = [1, 2, 3, 4, 5];        // arrays
let ant = [];
let atu = [];
let dobro = [];

p_array.innerHTML = "[" + elementos_array + "]";

btn_reduzir.addEventListener("click", (evt)=> {
    dobro.push(elementos_array[0] * 2);     // pegando o dobro do 'primeiro elemento'
    resultado.innerHTML = elementos_array.reduce((anterior, atual, pos)=> {     // método 'reduce' reçebe um valor 'anterior' como parâmentro
        ant.push(anterior);
        atu.push(atual);
        dobro.push(atual * 2);      // multiplicando o valor do array por 2
        return atual + anterior;        // retornando a soma do valor 'atual' com o valor 'anterior'
    });
    resultado.innerHTML += "<br/>V.anterior: " + ant + "<br/>V.atual: " + atu + "<br/>Dobro: " + dobro;
});