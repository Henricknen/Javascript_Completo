const p_array = document.querySelector("#array");
const btn_verificar = document.querySelector("#btnVerificar");
const resultado = document.querySelector("#resultado");

const elementos_array = [16, 13, 5, 8, 10, 20, 15];
p_array.innerHTML = "[" + elementos_array + "]";

btn_verificar.addEventListener("click", (evt)=> {
    const res = elementos_array.some((e, i)=> {        // utilizando método 'some'
        if(e<18) {        // condição
            resultado.innerHTML = "Array não conforme na posição: " + i;
        }
        return e>=18;
    })
    if(ret) {
        resultado.innerHTML = "Ok";
    }
});