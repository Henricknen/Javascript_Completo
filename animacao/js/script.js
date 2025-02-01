    const carro = document.getElementById("carro");     // pegando elemento com base em seu 'id'
    const btn_esquerda = document.getElementById("btn_esquerda");
    const btn_direita = document.getElementById("btn_direita");

    const init =()=> {      // função 'init' faz a iniçialização do processo de animação
        carro.style = "position:relative;left:0px"      // altera a posição do elemento de id 'carro'
    }

    btn_direita.addEventListener("click", ()=> {       // adicionando 'evento de click' para fazer realizar a animação
        let pos = parseInt(carro.style.left);
        pos += 10;      // incrementando 'pos'
        carro.style = `position:relative;left:${pos}px`;
    });

    btn_esquerda.addEventListener("click", ()=> {
        carro.style.left = parseInt(carro.style.left) - 10 + "px";      // lógica 'resumida' para fazer a animação do elemento ir para a esquerda
    });


    window.onload = init;       // evento 'onload' responsável por chamar a função init