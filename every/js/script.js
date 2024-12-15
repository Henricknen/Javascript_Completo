const p_array = document.querySelector("#array");
const btn_verificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [21, 34, 45, 08, 68, 97, 03, 21, 55];
p_array.innerHTML = "[" + elementos_array + "]";

btn_verificar.addEventListener("click", (evt)=> {
    const res = elementos_array.every((e, i)=> {        // utilizando método 'every' com uma 'arrow function' que reçebe o elemento 'e' que está sendo interado e a posição 'i' do elemento
        if(e < 18) {        // condição
            resultado.innerHTML = "Array não conforme na posição: " + i;
        }
        return e >= 18;
    });
    if(ret) {
        resultado.innerHTML = "Ok";
    }
});