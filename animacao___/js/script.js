    const carro = document.getElementById("carro");
    const btn_parar = document.getElementById("btn_parar");
    const btn_esquerda = document.getElementById("btn_esquerda");
    const btn_direita = document.getElementById("btn_direita");

    const init =()=> {
        carro.style = "position:relative;left:0px;width:100px";
        tamMax = window.innerWidth - parseInt(carro.style.width);     // variável 'tamMax' armazena o 'largura da tela' menos a 'largura do carro'
    }

    let anima = null;
    let tamMax = null;

    const move =(dir)=> {
        if(dir > 0) {       // limitando o movimento de 'dir' verificando se o 'dir' está indo para a direita
            if(parseInt(carro.style.left) <= tamMax) {
                carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
                anima = setTimeout(move, 20, dir);
            } else {
                clearTimeout(anima);
            }
        } else if(dir < 0) {        // verifica se 'dir' está indo para esquerda
            if(parseInt(carro.style.left) >= 0) {
                carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
                anima = setTimeout(move, 20, dir);
            } else {
                clearTimeout(anima);
            }
        }
    }

    btn_parar.addEventListener("click",()=> {
        clearTimeout(anima);
    });

    btn_direita.addEventListener("click", ()=> {
        clearTimeout(anima);
        move(1);
    });
    
    btn_esquerda.addEventListener("click", ()=> {
        clearTimeout(anima);
        move(-1);
    });

    window.addEventListener("load", init());
    window.addEventListener("resize", ()=> {        // toda vez que a tela for 'redimensionada'
        tamMax = window.innerWidth - parseInt(carro.style.width);       // será calculada o tamanho máximo, armazenado na variável 'tamMax'
    });