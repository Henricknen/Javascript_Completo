const numero = document.getElementById("numero");        // pegando elemento que tem id 'numero'

let promise = new Promise((resolve, reject)=> {        // promise (promessa) reçebendo como parâmentro o resultado 'ok' e o resultado 'erro'
    let resultado = true;
    let tempo = 3000;
    setTimeout(()=> {       // 'setTimeout' depois do 'tempo' de 3 segundos '3000' muda 'resultado' para true
        if(resultado) {
            resolve("Deu tudo certo...");       // 'resolve' resultado 'ok'
        } else {
            reject("Deu tudo errado...");       // 'reject' resultado 'erro'
        }
    }, tempo);
});     // 'finalização' da promise após 3 segundos '3000'

promise.then((retorno)=>{        // se dar certo cai no 'then'
    numero.innerHTML = retorno;
    numero.classList.remove("erro");        // 'classList.remove' remove a classe erro
    numero.classList.add("ok");
}) 
promise.catch((retorno)=> {        // se dar errado cai no 'catch'
    numero.innerHTML = retorno;
    numero.classList.add("erro");
    numero.classList.remove("ok");
});

numero.innerHTML = "processando...";