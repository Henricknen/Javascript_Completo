function soma(...valores) {     // spread '...' transforma o parâmetro valores em um parâmetro 'rest'
    let res = 0;
    for(let v of valores) {     // o 'of' percorre o objeto iterável 'valores' e atribui cada elemento à variável 'v'
        res += v        // 'res' reçebe o seu valor mais o valor de 'v'
    }
    return res
}

console.log(soma(10, 44, 21, 15));      // console chama a função soma passando 4 valores