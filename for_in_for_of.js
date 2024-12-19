let num = [10, 20, 30, 40, 50];      // array numérico

for (n in num) {     // 'for in' percorre os índices do array 'num', 'n' é a variável que recebe os 'índices'
    console.log(num[n]);     // imprime os elementos do array 'num' acessados pelo índice 'n'
}

for (let i = 0; i < num.length; i++) {       // 'for' tradicional, usa um índice para percorrer o array
    console.log(num[i]);      // imprime os elementos do array 'num' no índice 'i'
}

// -------------------------------------------------------------------------------------

let numm = [10, 20, 30, 40, 50];

for (n of numm) {     // 'for of' percorre diretamente os elementos do array 'numm', 'n' é a variável que recebe o 'valor' de cada elemento
    console.log(n);    // imprime cada elemento do array 'numm'
}
