const body = document.body;

const estilotopo = 
    "display: flex;" +
    "justify-content: space-between;" +
    "align-items: center;" +
    "background-color: #00f;"

const topo = document.createElement("div");     // criando uma 'div' topo
topo.setAttribute("id", "topo");        // inserindo atributo 'id'
topo.setAttribute("style", estilotopo);
body.prepend(topo);     // 'anexando' div criada em body

const estilo_img_logo = "width:200px"
const logo =        // criando 'logo'
"<div id = 'logo' class = 'logo'>" +
    "<img src = 'logo.png' title = 'Header' style = '" + estilo_img_logo + "'/>" +
"</div>";

topo.innerHTML += logo;     // inserindo logo 'dentro' do topo

const login =       // area de login
"<div id = 'login' class = 'login'>" +
"<p id = 'matricula'>Matrícula:<span></p>" +
"<p id = 'nome'>Nome:<span></span></p >" +
"</div>";

topo.innerHTML += login;