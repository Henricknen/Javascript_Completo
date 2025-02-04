    const carro = document.getElementById("carro");
    const btn_parar = document.getElementById("btn_parar");     // pegando elemento de id 'btn_parar'
    const btn_rodar = document.getElementById("btn_rodar");

    const init =()=> {
        carro.style = "position:relative;left:0px;width:100px;height:40px";
        tamCarro = parseInt(carro.style.width);
        tamMax = window.innerWidth - tamCarro;
    }

    let anima = null;
    let tamMax = null;
    let tamCarro = null;        // criando variável 'tamCarro' é praticamente a largura do elemento
    let dir = 0;        // criando variável 'dir'

    const move =()=> {      // função controlará a direção
        if(parseInt(carro.style.left) >= tamMax) {      // condição para 'mudar' a direção
            dir =- 1;
        } else if(parseInt(carro.style.left) <= 0) {
            dir = 1
        }

        carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
        anima = setTimeout(move, 20);       // chamando a função 'move' sem passar parâmetros
    }

    btn_parar.addEventListener("click",()=> {
        clearTimeout(anima);
    });

    btn_rodar.addEventListener("click",()=> {
        move();     // após clicar no botão de id 'btn_rodar' é chamada a função 'move'
    });

    window.addEventListener("load", init());

    window.addEventListener("resize", ()=> {
        tamMax = window.innerWidth - parseInt(carro.style.width);
    });

    window.addEventListener("keydown", (evt)=> {        // listener responsável por aumentar o tamanho do elemento
        if(evt.code === "ArrowUp") {        // se a tecla com 'seta para cima' for precionada
            carro.style.width = parseInt(carro.style.width) + 10 + "px";        // 'width' será 'incrementado' 10 pixels
            carro.style.height = parseInt(carro.style.height) + 10 + "px";          // 'height' será 'icrementado' 10 pixels
        }
        if(evt.code === "ArrowDown") {       // se tecla com 'seta para baixo' for precionada
            carro.style.width = parseInt(carro.style.width) - 10 + "px";        // diminui o 'width' em 10 pixels
            carro.style.height = parseInt(carro.style.height) - 10 + "px";          // dimini o 'height' em 10 pixels

        }

        tamCarro.parseInt(carro.style.width);
        tamMax = window.innerWidth = tamCarro;
    });