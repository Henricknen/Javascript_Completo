const f = function(...valores) {     // função anônima por não possuir nome tem que está assoçiada a uma variável, essa está sendo assoçiada a variável 'f'
    let res = 0;
    for(let v of valores) {
        res += v
    }
    return res
}

console.log(f(10, 44, 21, 15, 3, 7));      // console chama a função soma passando 6 valores

// função anônima utilizando construtor 'new Function' -----------------------------------------------------------------

const ff = new Function("v1", "v2", "return v1 + v2");      // último parâmetro é o corpo da função ou seja o que a função faz com os parâmetros reçebidos
console.log(ff(10, 5));     // parâmetros passados para a função 
