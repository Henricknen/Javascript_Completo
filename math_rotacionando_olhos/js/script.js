const olhos = [...document.getElementsByClassName("olho")];     // pegando os elementos que usa a 'classe' olho

let posx_mouse = 0;     // variáveis de posição do mouse
let posy_mouse = 0;

window.addEventListener("mousemove", (evt)=> {      // pega as cordenadas no mouse, e toda vez que mover o mesmo ele disparará um evento
    posx_mouse = evt.clientX;       // 'clientX' captura a posição do mouse
    posy_mouse = evt.clientY;

    const rot = Math.atan2(posy_mouse, posx_mouse) * 180 / Math.PI;
    
    olhos.forEach((o)=> {
        o.style.transform = "rotate("+ rot + "deg)";     // criando a rotação dos olhos
    });
});

