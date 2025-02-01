    const carro = document.getElementById("carro");
    const btn_parar = document.getElementById("btn_parar");
    const btn_esquerda = document.getElementById("btn_esquerda");
    const btn_direita = document.getElementById("btn_direita");

    const init =()=> {
        carro.style = "position:relative;left:0px";
    }

    let anima = null;       // variável 'anima' inicializando 'nula'

    const move =(dir)=> {       // função 'move' é responsável por fazer o 'incremento' ou 'decremento' do elemento
        carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
    }

    btn_parar.addEventListener("click",()=> {
        clearInterval(anima);       // função 'clearInterval' responsável por encerra animação
    });

    btn_direita.addEventListener("click", ()=> {
        clearInterval(anima);       // a cada click é encerrada a animação atual
        anima = setInterval(move, 20, 1);       // variável anima recebe o 'setInterval' com 'funçao' 'intervalo' e 'incremento' como parâmetro
    });

    btn_esquerda.addEventListener("click", ()=> {
        clearInterval(anima);
        anima = setInterval(move, 20, -1);
    });

    window.onload = init;