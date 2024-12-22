const soma = (v1, v2)=> {       // 'arrow function' ao invés de utilizar function utiliza um seta '=>'
 let res = v1 + v2
 return res   
}

console.log(soma(10, 5));

const codifificando = x => {        // quando se reçebe apenas um parâmetro não é necessário utilizar parentezes '()'
    return x
}

console.log(codifificando("JavaScript"));