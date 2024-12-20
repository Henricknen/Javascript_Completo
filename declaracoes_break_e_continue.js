let n = 0;
let max = 1000;

while(n < max) {
    console.log("JavaScript " + n)
    if(n > 10) {        // se essa condição 'if' for 'true' a execução entra nesse 'if'
        break       // é executado o 'break' que encerrará toda execução do loop
    }
    n++
}
console.log("Fim...");

// ----------------------------------------------------------------------------

let = n = 0
let maxx = 1000
let par = 0

for (let i = n; i < max; i++) {
    if(i % 2 != 0) {        // se i for diferente de 0
        continue        // 'continue' fara a iteraçao continuar
    }
    par++       // se o número não for 'impar', continue não será executado e par será incrementado

}
console.log("Quantidade de numeros par: " + par);
console.log("Fim...");