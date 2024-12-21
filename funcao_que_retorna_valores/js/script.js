function par_impar() {
    let n1 = 10;
    let n2 = 2;
    let res = n1 * n2;
    if(res % 2 == 0) {
        return "Par";       // 'return' retorna um valor depois que todo o processamento da função chegar ao fim
    } else {
        return "Impar";
    }
}

let res = par_impar();      // variável 'res' reçebe o 'retorno' da função par_impar
console.log(res);       // imprimindo a variável 'res' no console