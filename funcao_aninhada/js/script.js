const soma =(...valores)=> {        // 'arrow fuction' com parametro 'rest'
    const somar = val => {      // criando função 'somar' dentro da função 'soma' reçebe apenas um parâmetro 'val'
    let res = 0
    for(v of val);       // valores por ser um array ultilizo 'for of', que cada valor recebido de 'val' vai para 'v'
    res += v        // 'res' que inicialmente é 0 soma com valor de 'v' e assim sucessivamente
    return res
    }
    return somar(valores);       // função 'soma' retornando os valores da função 'somar'
}
console.log(soma(45, 15, 30));       // chamando a função 'soma' e passando valores para o spread '...valores'