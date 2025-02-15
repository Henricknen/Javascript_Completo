const teclasNum = [...document.querySelectorAll(".num")];
const teclasOp = [...document.querySelectorAll(".op")];
const teclaRes = document.querySelector(".res");
const display = document.querySelector(".display");
const ton = document.getElementById("ton");
const tlimpar = document.getElementById("tlimpar");
const tigual = document.getElementById("tigual");
const tcpy = document.getElementById("tcpy");       // pegando o elemento de id 'tcpy'
const teste = document.getElementById("teste");

let sinal = false;
let decimal = false;

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        sinal = false;        
        if(evt.target.innerHTML == ",") {
            if(!decimal) {
                decimal = true;
                if(display.innerHTML == "0") {
                    display.innerHTML = "0,";
                } else {                    
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            if(display.innerHTML == "0") {
                display.innerHTML = "";
            }
            display.innerHTML += evt.target.innerHTML;
        }
    });
});

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if(!sinal) {
            sinal = true;
            if(display.innerHTML == "0") {
                display.innerHTML = "";
            }
            if(evt.target.innerHTML == "x") {
                display.innerHTML += "*";
            } else {
                display.textContent += evt.target.innerHTML;
            }
        }
    });
});

tlimpar.addEventListener("click", (evt) => {
    sinal = false;
    decimal = false;
    display.textContent = "0";
});

tigual.addEventListener("click", (evt) => {
    sinal = false;
    decimal = false;
    const res = eval(display.innerHTML);
    display.innerHTML = res;
});

tcpy.addEventListener("click", (evt)=> {
    navigator.clipboard.writeText(display.innerHTML);       // propriedade 'clipboard' e método 'writeText' para copiar para área de transferência
});