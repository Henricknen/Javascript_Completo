    const carro = document.getElementById("carro");
    const btn_parar = document.getElementById("btn_parar");
    const btn_esquerda = document.getElementById("btn_esquerda");
    const btn_direita = document.getElementById("btn_direita");

    const init =()=> {
        carro.style = "position:relative;left:0px";
    }

    let anima = null;

    const move =(dir)=> {
        carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px";
        anima = setTimeout(move, 20, dir);      // variável 'anima' armazena função 'setTimeout' que chama a função move, o tempo para que a função seje chamada e o parâmetro de entrada
    }

    btn_parar.addEventListener("click",()=> {
        clearTimeout(anima);
    });

    btn_direita.addEventListener("click", ()=> {
        clearTimeout(anima);
        move(1);        // 'chamando' a função move e passasando parâmetro 1
    });
    
    btn_esquerda.addEventListener("click", ()=> {
        clearTimeout(anima);
        move(-1);
    });

    window.onload = init;