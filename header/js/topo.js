const head = document.head;     // assoçiando elemento head na variável 'head'
const body = document.body;

const estilo = "</link rel = 'styleshet' 'text/css' href = 'topo.css'/>";       // link do arquivo topo.css na variável estilo
head.innerHTML += estilo;       // assoçiando arquivo css no head

const topo = document.createElement("div");     // criando uma 'div' topo
topo.setAttribute("id", "topo");        // inserindo atributo 'id'
topo.setAttribute("class", "topo");
body.prepend(topo);     // 'anexando' div criada em body

const logo =        // criando 'logo'
"<div id = 'logo' class = 'login'>" +
    "<img src = 'logo.png' title = 'Header'/>" +
"</div>";

topo.innerHTML += logo;     // inserindo logo 'dentro' do topo

const login =       // area de login
"<div id = 'login' class = 'login'>" +
"<p id = 'matricula'>Matrícula:<span></p>" +
"<p id = 'nome'>Nome:<span></span></p >" +
"</div>";

topo.innerHTML += login;