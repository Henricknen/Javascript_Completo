function* contador();      // '*' na frente de function indica que essa é uma funão 'geradora'
    let i = 0       // 'interador' permite o controle do retorno dessa função
    while(true) {       // 'loop' infinito
        yield i++
        if(i > 10) {      // controle de parada
            break
    }
}

const itc = contador();      // interador 'itc' chamando a função geradora 'contador'
for(let c of itc) {     // 'loop' infinito
    console.log(c);
}

