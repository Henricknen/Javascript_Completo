const numero = document.getElementById("numero");        // pegando elemento que tem id 'numero'
const btn_promessa = document.getElementById("btn_promessa");

btn_promessa.addEventListener("click", (evt)=> {        // evento de 'click'
    numero.innerHTML = "Processando...";
    console.log(promessa());      // chama a função 'promessa' e exibe a Promise no console
});

const promessa=()=> {       // função promessa contém toda 'promise'
    let p = new Promise((resolve, reject)=> {        // promise (promessa)
        let resultado = true;
        let tempo = 3000;
        setTimeout(()=> {       // simula um atraso de 3 segundos '3000'
            if(resultado) {     //se a promise retorna 'resolve'
                resolve("Deu tudo certo...");
                numero.innerHTML = "Deu tudo certo...";
                numero.classList.remove("erro");
                numero.classList.add("ok");
            } else {        // se a promise retorna 'reject'
                reject("Deu tudo errado...");
                numero.innerHTML = "Deu tudo errado...";
                numero.classList.add("erro");
                numero.classList.remove("ok");
            }
        }, tempo);
    });
    return p;       //retorno da promise
}

numero.innerHTML = "Esperando";     // define o conteúdo inicial como 'Esperando'