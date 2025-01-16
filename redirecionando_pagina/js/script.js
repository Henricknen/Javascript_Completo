const url = document.getElementById("url");     // 'capturando' elemento url
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", (evt)=> {
    // window.location = "https://github.com/Henricknen/Javascript_Completo";      // 'window.location' redireçiona a página para 'https://github.com/Henricknen/Javascript_Completo'
    // window.location.replace("https://github.com/Henricknen/Javascript_Completo");      // 'window.location.replace' faz o redireçionamento, mas revome a url corrente do histórico
    window.location.assign("https://github.com/Henricknen/Javascript_Completo");      // 'window.location.assign' faz o redireçionamento, mas não revome a url corrente do histórico
    // window.location.reload();       // método 'reload' recarrega a página
    // window.history.back();       // 'history' navega pelo histórico e back indica o histórico da página anterior
    // window.history.forward();       // 'forward' indica o histórico da página seguinte
    // window.history.go(1);       // permite navegar mais de uma página por vez
    // window.location = url.value;       // pegando a url que foi digitado no DOM
});